import { Service, Inject } from 'typedi';
import { OrmRepository } from "typeorm-typedi-extensions";
import { Repository } from 'typeorm';
import { Transaction, TransactionRepository } from 'typeorm';
import * as jwt from 'jsonwebtoken';

import { DI, Errors } from '../constants';
import { User } from '../models';
import { Logger, UserUtils } from '../utils';
import { AuthRepository } from '../repositories';

@Service()
export default class AuthService {

    @OrmRepository(User)
    private userRepository: Repository<User>;

    @Inject()
    private userUtils: UserUtils;

    @Inject()
    private authRepository: AuthRepository;

    @Inject(DI.tokens.secret)
    private secret: string;

    async signin(email: string, password: string): Promise<any>{
        const user: User = await this.userRepository.findOne({ where: { email } });
        if(!user) {
            throw Errors.INVALID_CREDENTIALS;
        }
        const hashedPassword = this.userUtils.hasPassword(password, String(user.id));
        if(hashedPassword !== user.password) {
            throw Errors.INVALID_CREDENTIALS;
        }
        const payload = {
            id: user.id,
        };
        const token = jwt.sign(payload, this.secret);
        await this.authRepository.addToList(`${user.id}`, token);
        return { 
            id: user.id,
            token
        };
    }

    @Transaction()
    async signup(email: string, password: string, @TransactionRepository(User) userTxRepository?: Repository<User>): Promise<User> {
        const user = new User();
        user.email = email;
        let updatedUser = await userTxRepository.save(user);
        updatedUser.password = this.userUtils.hasPassword(password, String(user.id));
        return userTxRepository.save(updatedUser);
    }
}
