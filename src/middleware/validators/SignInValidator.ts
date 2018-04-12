import { ExpressMiddlewareInterface  } from 'routing-controllers';

import { Errors } from '../../constants';

export default class SignInValidator implements ExpressMiddlewareInterface  {

    use(req: any, res: any, next) {
        const { body: { email, password } } = req;
        if(!email || !password) {
            throw Errors.CREDENTIALS_MISSED;
        }
        next();
    }
}
