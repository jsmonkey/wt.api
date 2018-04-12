import * as winston from 'winston';
import { Service } from 'typedi';

@Service()
export default class Logger extends winston.Logger {
  constructor() {
    super({
      transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({
          level: 'error',
          filename: 'errors.log',
          maxsize: 10000000,
        })
      ],
    });
  }
}
