import axios, {AxiosResponse} from "axios";
import { Query } from "./session.interface"
//import { SessionModel } from './session.model';

const getListSession = async (query :Query) => {
    const {short_title , status} = query
    // await SessionModel.find({status})
    //     .populate({
    //         path: 'program',
    //         match: {short_title}
    //         options: {limit: 1}
    //     })
    //     .exec();
    let urlFilter = '?';
    if (short_title) urlFilter = `${urlFilter}short_title=${short_title}`;
    if (status) urlFilter = `${urlFilter}&status=${status.toUpperCase()}`;
    let result: AxiosResponse = await axios.get(`https://api.entrylevel.net/test/sessions${urlFilter}`);
    return result.data;
};

export { getListSession };