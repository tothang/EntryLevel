import {call, fork, put, takeLatest} from "redux-saga/effects";
import Services from './service';
import {LOAD_SESSION, LOADED_SESSION} from "./constants";
interface ITodo {
	groupTags: any[];
}
function* fetchSessions(action:any) {
	// const currentState = yield select((state => state.users));
	try {
		const home:ITodo = yield call(Services.getSessions);
		yield put({
			type: LOAD_SESSION,
			payload: {
				groupTags: home.groupTags,
				loaded: true,
				error: false
			}
		});
	} catch (e) {
		console.log(e)
		yield put({type: LOADED_SESSION, payload: {lists: {}, loaded: false, error: true}});
	}

}

function* watchFetchSessions() {
	yield takeLatest(LOADED_SESSION, fetchSessions);
}

export default function* sessionSagas() {
	yield fork(watchFetchSessions);
}

