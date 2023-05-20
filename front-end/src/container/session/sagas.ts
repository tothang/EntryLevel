import {call, fork, put, takeLatest} from "redux-saga/effects";
import Services from './service';
import {LOAD_SESSION, LOADED_SESSION} from "./constants";
interface IRequest {
	data?: any;
}

function* fetchSessions(action:any) {
	const {filter} = action;
	try {
		const list:IRequest = yield call(Services.getSessions, filter);
		yield put({
			type: LOADED_SESSION,
			payload: {
				list: list,
				loaded: true,
				error: false
			}
		});
	} catch (e) {
		console.log(e)
		yield put({type: LOADED_SESSION, payload: {list: [], loaded: false, error: true}});
	}

}

function* watchFetchSessions() {
	yield takeLatest(LOAD_SESSION, fetchSessions);
}

export default function* sessionSagas() {
	yield fork(watchFetchSessions);
}

