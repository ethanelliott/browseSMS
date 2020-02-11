import {Service} from "typedi";
import twilio from 'twilio'
import {env} from "../../env";

@Service()
export default class TwilioService {
    private client: any;

    constructor() {
        this.client = twilio(env.twilio.accountSid, env.twilio.authToken);
    }

    public async sendMessage(to: string, message: string): Promise<void> {
        const MAX_LENGTH = 100;
        let i = 0;
        while (message.length > MAX_LENGTH) {
            let m = message.substring((i * MAX_LENGTH), ((i+1) * MAX_LENGTH) - 1);
            message = message.substring((i+1) * MAX_LENGTH);
             let response = await this.client.messages.create({
                body: m,
                from: env.twilio.phoneNumber,
                to: to
            });
             console.log(message, `\n\n`, m, `\n\n`);
             console.log(`m: ${i}`, response);
            i++;
        }
    }
}
