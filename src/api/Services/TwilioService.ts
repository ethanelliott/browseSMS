import {Service} from "typedi";
import twilio from 'twilio'
import {env} from "../../env";

@Service()
export default class TwilioService {
    private client: any;

    constructor() {
        this.client = twilio(env.twilio.accountSid, env.twilio.authToken);
    }

    public sendMessage(): void {
        this.client.messages.create({
            body: 'hello',
            from: env.twilio.phoneNumber,
            to: '+19059757241'
        }).then(message => {
            console.log(message);
        })
    }
}
