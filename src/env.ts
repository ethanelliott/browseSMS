import dotenv from 'dotenv';
import * as path from 'path';
import { getOsEnv, normalizePort } from './lib/env';
import { readFileSync } from "fs";

dotenv.config({path: path.join(process.cwd(), `.env${((process.env.NODE_ENV === 'test') ? '.test' : '')}`)});

export const env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: getOsEnv('PRODUCTION') === 'true',
    isTest: process.env.NODE_ENV === 'test',
    app: {
        name: getOsEnv('APP_NAME'),
        version: getOsEnv('APP_VERSION'),
        description: getOsEnv('APP_DESCRIPTION'),
        host: getOsEnv('APP_HOST'),
        schema: getOsEnv('APP_SCHEMA'),
        routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
        port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
        publicPort: normalizePort(process.env.PUBLIC_PORT || getOsEnv('APP_PUBLIC_PORT')),
        jwt: {
            key: readFileSync(getOsEnv('APP_JWT_KEY')).toString()
        }
    },
    swagger: {
        route: getOsEnv('SWAGGER_ROUTE'),
        enabled: getOsEnv('SWAGGER_ENABLED')
    },
    monitor: {
        route: getOsEnv('MONITOR_ROUTE'),
        enabled: getOsEnv('MONITOR_ENABLED')
    },
    twilio: {
        accountSid: getOsEnv('TWILIO_ACCOUNT_SID'),
        authToken: getOsEnv('TWILIO_AUTH_TOKEN'),
        phoneNumber: getOsEnv('TWILIO_PHONE_NUMBER'),
    }
};
