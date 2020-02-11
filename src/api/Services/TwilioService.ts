import {Service} from "typedi";
import twilio from 'twilio'
import {env} from "../../env";

@Service()
export default class TwilioService {
    private client: any;

    constructor() {
        this.client = twilio(env.twilio.accountSid, env.twilio.authToken);
    }

    public sendMessage(to: string, message: string): void {
        const MAX_LENGTH = 400;
        let i = 0;
        while (message.length > MAX_LENGTH) {
            let m = message.substring((i * MAX_LENGTH), ((i+1) * MAX_LENGTH) - 1);
            message = message.substring((i+1) * MAX_LENGTH);
            this.client.messages.create({
                body: m,
                from: env.twilio.phoneNumber,
                to: to
            }).then(message => {
                console.log(message);
            }).catch(err => {
                console.error(err);
            });
            i++;
        }
    }
}
