import 'reflect-metadata';
import {Get, JsonController, QueryParam} from 'routing-controllers';
import TwilioService from "../Services/TwilioService";

@JsonController('')
export class MainController {
    constructor(
        private twilioService: TwilioService
    ) {
    }

    @Get('/send')
    public send(): any {
        this.twilioService.sendMessage();
        return "HELLO";
    }

    @Get('/receive')
    public receive(
        @QueryParam('from') fr: string
    ): any {
        console.log(fr);
        return "HELLO";
    }

}
