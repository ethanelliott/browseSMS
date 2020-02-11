import 'reflect-metadata';
import {Get, JsonController, QueryParam} from 'routing-controllers';
import TwilioService from "../Services/TwilioService";
import WikipediaService from "../Services/WikipediaService";
import {Base64} from 'js-base64';
import LZUTF8 from'lzutf8';

@JsonController('')
export class MainController {
    constructor(
        private twilioService: TwilioService,
        private wikipediaService: WikipediaService
    ) {
    }

    @Get('/send')
    public send(): any {
        return "HELLO";
    }

    @Get('/receive')
    public async receive(
        @QueryParam('From') FROM: string,
        @QueryParam('To') TO: string,
        @QueryParam('Body') BODY: string,
    ): Promise<any> {
        let page = await this.wikipediaService.getPage(BODY);
        let summary = await page.summary();
        // just the summary because the rest is far too much for my poor twilio account
        console.log(page);
        let data = {
            title: page.raw.title, summary,
        };
        let dataStr = JSON.stringify(data);

        // searching for a fix for the compression on android
        let compressedData = LZUTF8.compress(dataStr, {outputEncoding: 'Base64'});
        console.log(compressedData);

        let enc = Base64.encode(dataStr);
        await this.twilioService.sendMessage(FROM, enc);
        return data;
    }
}
