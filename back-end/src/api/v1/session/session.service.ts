import axios, {AxiosResponse} from "axios";
import { Query } from "./session.interface"
import moment from "moment";
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
    let list =  result.data;
    // @ts-ignore
    list.sort((a:any,b:any) => moment(b.start_date).format('YYYYMMDD') - moment(a.start_date).format('YYYYMMDD'))
    return list.slice(0,50);

};

export { getListSession };