import {all} from "redux-saga/effects";
import sessionSagas from "../container/session/sagas";

export default function* rootSaga() {
    yield all([sessionSagas()]);
}
