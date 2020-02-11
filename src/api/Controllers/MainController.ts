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
        @QueryParam('From') FROM: string,
        @QueryParam('To') TO: string,
        @QueryParam('Body') BODY: string,
    ): any {
        console.log(TO, FROM, BODY);
        return "HELLO";
    }

    /**
     * /api/receive?
     * ToCountry=CA
     * &ToState=ON
     * &SmsMessageSid=SMeb4279fbd29a97b59c4162184185c9df
     * &NumMedia=0
     * &ToCity=Toronto
     * &FromZip=
     * &SmsSid=SMeb4279fbd29a97b59c4162184185c9df
     * &FromState=ON
     * &SmsStatus=received
     * &FromCity=HAMILTON
     * &Body=HELLO
     * &FromCountry=CA
     * &To=%2B16474961070
     * &ToZip=
     * &NumSegments=1
     * &MessageSid=SMeb4279fbd29a97b59c4162184185c9df
     * &AccountSid=ACd779857453dee735f767c904b566791c
     * &From=%2B19059757241
     * &ApiVersion=2010-04-01
     */
}
