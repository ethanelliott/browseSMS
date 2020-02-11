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
        return "HELLO";
    }

    @Get('/receive')
    public receive(
        @QueryParam('From') FROM: string,
        @QueryParam('To') TO: string,
        @QueryParam('Body') BODY: string,
    ): any {
        console.log(TO, FROM, BODY);
        this.twilioService.sendMessage(FROM, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas elementum risus a auctor. Etiam tincidunt tortor at massa feugiat, eget commodo justo viverra. Nam ultrices faucibus lorem et tempus. Maecenas eget nulla semper, faucibus sapien tincidunt, condimentum libero. Nam iaculis nec nibh non fermentum. Sed aliquam eros vel ultrices venenatis. Sed justo ligula, pulvinar porta bibendum vitae, tincidunt at velit. Integer in velit vel arcu dapibus commodo at quis elit. Aliquam euismod nunc velit, in aliquet eros egestas in. Cras vehicula dui vitae aliquam viverra. Nulla facilisi. Pellentesque auctor, ipsum ut molestie tincidunt, libero lacus pulvinar odio, a egestas massa tortor vitae justo.' +
            'Sed in iaculis tellus, a imperdiet ex. Fusce ullamcorper dolor in congue luctus. Morbi sit amet nunc non lectus suscipit fermentum. Sed convallis vehicula ex, eu convallis sapien blandit sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pulvinar ante. Donec pharetra urna gravida, molestie arcu vel, laoreet libero. Maecenas nisi lectus, porttitor nec lobortis ac, volutpat sit amet justo. Praesent lorem velit, scelerisque a congue sed, tincidunt in arcu. Morbi tristique vitae turpis id sodales. Praesent scelerisque vel nunc at cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum iaculis luctus accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id turpis at felis aliquam consequat.' +
            'Duis id ipsum imperdiet, luctus urna nec, pretium est. Morbi at porttitor sem. Quisque vitae rhoncus metus, ut convallis dui. Nullam non elit mollis, cursus orci eu, ultrices massa. Nullam varius quam vitae rutrum ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae mauris mi. Etiam malesuada enim a massa ultrices, suscipit ornare metus iaculis. Cras euismod nulla et augue convallis, sed vulputate tellus mollis.');
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
