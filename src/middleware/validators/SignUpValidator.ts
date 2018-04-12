import { ExpressMiddlewareInterface  } from 'routing-controllers';
import { Inject } from 'typedi';
import * as validator from 'validator';
import { Errors } from '../../constants';

export default class SignUpValidator implements ExpressMiddlewareInterface  {

    async use(req: any, res: any, next) {
        const { body: { email, password } } = req;
        if(!email || !validator.isEmail(email)) {
            throw Errors.EMAIL_INVALID_FORMAT;
        }
        if(!password) {
            throw Errors.CREDENTIALS_MISSED;
        }
        next();
    }
}
