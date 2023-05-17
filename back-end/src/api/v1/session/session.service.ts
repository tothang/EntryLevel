import axios, {AxiosResponse} from "axios";
import { Query } from "./session.interface"
//import { SessionModel } from './session.model';

const getListSession = async (query) => {
    const filter: Query = query;
    const {short_title , status} = filter
    // await SessionModel.find({short_title})
    //     .populate({
    //         path: 'program',
    //         match: {status}
    //     })
    //     .exec();
    let urlFilter = '?';
    if (short_title) urlFilter = `${urlFilter}short_title=${short_title}`;
    if (status) urlFilter = `${urlFilter}status=${short_title}`;
    let result: AxiosResponse = await axios.get(`https://api.entrylevel.net/test/sessions${urlFilter}`);
    return result.data
};

export { getListSession };