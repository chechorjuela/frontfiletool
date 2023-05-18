import { all } from "redux-saga/effects";
import { watchFilesAsync } from "./file";

export function* rootSaga() {
    yield all([
        watchFilesAsync()
    ])
}