import { ExpressMiddlewareInterface  } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { Repository } from 'typeorm';
import { OrmRepository } from "typeorm-typedi-extensions";
import * as jwt from 'jsonwebtoken';

import { DI, Errors } from '../constants';
import { User } from '../models';

export default class AuthHandler implements ExpressMiddlewareInterface{

    @OrmRepository(User)
    private userRepository: Repository<User>;

    @Inject(DI.tokens.secret)
    private secret: string;

    async use(request: any, response: any, next: (err?: any) => any) {
        const authHeader = request.headers.authorization;
        if(!authHeader) {
            throw Errors.UNAUTHORIZED;
        }
        const [scheme, cred] = authHeader.split(' ');
        if(!/^Bearer$/i.test(scheme)) {
           throw Errors.INVALID_CREDENTIALS_FORMAT;
        }
        try {
            const decoded = jwt.verify(cred, this.secret);
            const user = await this.userRepository.findOneById((<any>decoded).id);
            if(!user) {
                throw Errors.INVALID_CREDENTIALS;
            }
            response.locals.uid = user.id;
            next();
        } catch(e) {
            throw Errors.INVALID_CREDENTIALS;
        }
    }
}
