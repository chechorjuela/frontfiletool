import {configureStore} from "@reduxjs/toolkit";
import files from "./redux/slice/files";
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from './redux/sagas'


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    files
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store