import 'reflect-metadata';
import * as path from 'path';
import { Container, Inject, Service } from 'typedi';

import AppProvider from './AppProvider';
import { Logger, EnvUtils } from './utils';
import { DI, env} from './constants';
import * as authStoreConfig from '../auth.store.config.json';

const logger = Container.get(Logger);
const envUtils = Container.get(EnvUtils);

const port = 3000;

Container.set(DI.tokens.authStoreConfig, authStoreConfig);
Container.set(DI.tokens.secret, envUtils.getEnvVar(env.AUTH_SECRET))

const appProvider = Container.get(AppProvider);
appProvider.createApplication().then(app => {
    app.listen(port, () => {
        logger.info(`Server is running on port ${port}`);
    });
});


