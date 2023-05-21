import axios from "axios";

const getSessions = async (_filter: any) => {
	const {short_title, status} = _filter;
	let baseUrl = 'http://0.0.0.0:4000/api/sessions';
	let urlFilter = '?';
	if (short_title) urlFilter = `${urlFilter}short_title=${short_title}`;
	if (status) urlFilter = `${urlFilter}&status=${status.toUpperCase()}`;
	const result = await axios.get(`${baseUrl}${urlFilter}`);
	return result?.data?.message;
}
export default {
	getSessions
}
