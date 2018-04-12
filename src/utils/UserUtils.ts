import { Service } from 'typedi';
import * as crypto from 'crypto';

@Service()
export default class UserUtils {
    hasPassword(password: string, salt: string): string {
        const hash = crypto.createHmac('sha512', password);
        hash.update(salt);
        return hash.digest('hex');
    }
}