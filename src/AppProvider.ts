import * as bodyParser from "body-parser";
import * as express from 'express';
import { useExpressServer, useContainer as useContainerForControllers } from 'routing-controllers';
import { createConnection, useContainer as useContainerForORM } from 'typeorm';
import { Container, Inject, Service } from 'typedi';

import * as controllers from './controllers';
import { ErrorHandler } from './middleware';

@Service()
export default class AppProvider {

  constructor() {
    useContainerForORM(Container);
    useContainerForControllers(Container);
  }

  async createApplication(): Promise<any> {
    await createConnection();
    const app = express();
    app.use(bodyParser.json());
    useExpressServer(app, {
        defaults: {
            undefinedResultCode: 204,
        },
        defaultErrorHandler: false,
        controllers: [
            ...(<any>Object).values(controllers),
        ],
        middlewares: [
          ErrorHandler,
        ],
      });
    return app;
  }
}
