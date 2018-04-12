import { Service, Inject} from 'typedi';
import { createClient } from 'redis';
import { promisify } from 'util';

import { DI } from '../constants';
import { AuthStoreConfig } from '../models';
import { AuthRepository } from '../repositories';

@Service()
export default class AuthStoreFactory {

    @Inject(DI.tokens.authStoreConfig)
    private authStoreConfig: AuthStoreConfig;

    create() {
        const { host, port } = this.authStoreConfig;
        return new AuthRepository({ host, port });
    }

}