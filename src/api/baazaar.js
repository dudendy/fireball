import axios from 'axios';
import { paramsToUrlString } from './common/utils';

var baseUrl = 'baazaar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getWearables(params) {
        return await axios.get(`${baseUrl}/wearables/?${paramsToUrlString(params)}`);
    }
}