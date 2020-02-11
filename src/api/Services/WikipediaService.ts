import {Service} from "typedi";
import wiki from 'wikijs';

@Service()
export default class WikipediaService {
    constructor() {
    }

    public async getPage(): Promise<any> {
        return await wiki().page('Node.js')
    }

}
