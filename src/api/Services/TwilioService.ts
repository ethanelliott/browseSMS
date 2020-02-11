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
        let maxMessage = Math.floor(message.length / MAX_LENGTH);
        for (let i = 0; i <= maxMessage; i++) {
            let m = `[${i}|${maxMessage}]${message.substring(0, MAX_LENGTH)}`;
            message = message.substring(MAX_LENGTH);
            await this.client.messages.create({
                body: m,
                from: env.twilio.phoneNumber,
                to: to
            });
        }
    }
}
