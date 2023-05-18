import {apiRoute} from '../../apis/index'
import {getFilesSelected, getFilesSlice, loadingRequest} from '../slice/files'
import {GET_FILE_BY_NAME_REQUEST, GET_FILES_ALL_REQUEST,} from '../types'
import {call, put, takeLatest} from 'redux-saga/effects'
import {getRequest} from "../../utils/httpRequest";

export function* getFilesSaga(states = "") {
  let url = apiRoute.filesUrl;
  if (states.payload) {
    url = `${url}?filename=${states.payload}`
  }
  yield put(loadingRequest(true))
  const {data} = yield call(() => getRequest(url).then(resp => resp).catch(err => err));
  try {
    yield put(getFilesSlice(data.data));
    yield put(loadingRequest(false))
  } catch (e) {
    console.log(e)
  }
}

export function* getFileByIdSaga(action) {
  const {payload} = action;
  let url = apiRoute.fileByNameUrl.replace(':name', payload);
  const {data} = yield call(() => getRequest(url).then(resp => resp).catch(err => err));
  try {
    yield put(getFilesSelected(data.data))
  } catch (e) {

  }

}


export function* watchFilesAsync() {
  yield takeLatest(GET_FILES_ALL_REQUEST, getFilesSaga)
  yield takeLatest(GET_FILE_BY_NAME_REQUEST, getFileByIdSaga)
}