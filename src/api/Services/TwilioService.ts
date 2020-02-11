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
        let i = 0;
        while (message.length > 1600) {
            let m = message.substring((i * 1600), ((i+1) * 1600));
            message = message.substring((i+1) * 1600);
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
