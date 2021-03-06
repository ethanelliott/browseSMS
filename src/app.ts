import 'reflect-metadata';
import logger from "./util/Log";
import {bootstrapMicroframework} from 'microframework-w3tec';
import {IocLoader} from "./loaders/IocLoader";
import {ExpressLoader} from "./loaders/ExpressLoader";
import {SwaggerLoader} from "./loaders/SwaggerLoader";
import {MonitorLoader} from "./loaders/MonitorLoader";
import {HomeLoader} from "./loaders/HomeLoader";
import {FileLoader} from "./loaders/FileLoader";

bootstrapMicroframework({
    loaders: [
        IocLoader,
        ExpressLoader,
        SwaggerLoader,
        MonitorLoader,
        HomeLoader,
        FileLoader
    ]
})
    .then(() => {
        logger.info("[START] Server is running!");
    })
    .catch((err: Error) => {
        logger.error(`[ERROR] THE SERVER HAS CRASHED: ${err}\n${err.stack}`);
    });
