import {all,takeLatest, call, put} from 'redux-saga/effects'
import appSage from "./app/sagas";
import todoSage from "./todo/saga";
import api from "../api";
export default function* () {
    yield all([
        appSage(),
        todoSage()
    ])

}