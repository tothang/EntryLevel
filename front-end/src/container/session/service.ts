import axios from "axios";
import moment from "moment";

const getSessions = async (_filter: any) => {
	const {short_title, status} = _filter;
	let baseUrl = 'http://0.0.0.0:4000/api/sessions';
	let urlFilter = '?';
	if (short_title) urlFilter = `${urlFilter}short_title=${short_title}`;
	if (status) urlFilter = `${urlFilter}&status=${status.toUpperCase()}`;
	const result = await axios.get(`${baseUrl}${urlFilter}`);
	let list =  result.data.message;
	// @ts-ignore
	list.sort((a:any,b:any) => moment(b.start_date).format('YYYYMMDD') - moment(a.start_date).format('YYYYMMDD'));
	return list.slice(0,50);
}
export default {
	getSessions
}
