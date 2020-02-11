import {Service} from "typedi";
import wiki from 'wikijs';

@Service()
export default class WikipediaService {
    constructor() {
    }

    public async getPage(pageName: any): Promise<any> {
        return await wiki().page(pageName);
    }

}
