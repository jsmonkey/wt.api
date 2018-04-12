import { Service, Inject} from 'typedi';
import { RedisClient, ClientOpts } from 'redis';
import { promisify } from 'util';

import { AuthStoreFactory } from '../factories';

@Service({ factory: [AuthStoreFactory, 'create'] })
export default class AuthRepository extends RedisClient {

    addToList: Function;
    getListRange: Function;

    constructor(opts: ClientOpts) {
        super(opts);
        this.addToList = promisify(this.rpush).bind(this);
        this.getListRange = promisify(this.lrange).bind(this);
    }
}