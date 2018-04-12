import { InterceptorInterface, Action } from 'routing-controllers';
import { Inject } from 'typedi';

import { User } from '../models';

export default class UserInterceptor implements InterceptorInterface {

    intercept(action: Action, user: User): Object {
        const { email } = user;
        return {
            email
        };
    }
}
