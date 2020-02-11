import 'reflect-metadata';
import {Get, JsonController} from 'routing-controllers';

@JsonController('')
export class MainController {
    constructor() {
    }

    @Get('/test')
    public test(): any {
        return "HELLO";
    }

}
