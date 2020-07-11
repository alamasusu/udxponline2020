import {all} from 'redux-saga/effects';
import {watchlogin,watchchecktoken} from './loginSaga';
export default function* rootSaga(){
    yield all([
        watchlogin(),
        watchchecktoken()
    ])
}