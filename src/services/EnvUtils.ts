import { Service } from 'typedi';

@Service()
export default class EnvUtils {
    getEnvVar(name: string): any {
       return process.env[name];
    }  
}
