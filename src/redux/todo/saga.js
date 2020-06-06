import {all,takeLatest, call, put} from 'redux-saga/effects'
import {Action} from "./redux";
import api from "../../api";
export default function* () {
    yield all([
        takeLatest(Action.Types.GET_TODOS, function* () {
            const result = yield call(api.getTodo)
            const list = result.data;
            yield put(Action.Creators.updateState({
                list
            }))

        })


    ])

}