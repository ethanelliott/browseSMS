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
        this.client.messages.create({
            body: message,
            from: env.twilio.phoneNumber,
            to: to
        }).then(message => {
            console.log(message);
        }).catch(err => {
            console.error(err);
        })
    }
}
