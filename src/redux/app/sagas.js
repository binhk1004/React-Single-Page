import {all,takeLatest, call, put} from 'redux-saga/effects'
import api from "../../api";
import {Action} from "./redux";

export default function* () {
    yield all([
        takeLatest(Action.Types.YOUTUBE_SEARCH, function* (action) {
            const result = yield call(api.youtubeSearch, action.params)
            yield put(Action.Creators.updateState({
                youtubeVideos:result.data
            }))
            console.log("[saga] action", action)
            console.log("[saga] youtubesearch", result)


        })


    ])

}