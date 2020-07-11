import {put,takeLatest} from 'redux-saga/effects';
import {Api} from '../APIDATA/Api';
function* checklogin(action){
    try {
        const mess=yield Api.login(action);
        if(mess==='ERROR'){
            yield put({type:'LOGIN_FAIL'});
        }else {
            yield put({type:'TOKEN',token:mess});
            const ifuser=yield Api.checktoken(mess);
            yield put({type:'IF_USER',ifuser:ifuser});
            yield put({type:'LOGIN_SUCESS'});
        }
    } catch (e) {
        console.log('Loi o checklogin');
    }
}
export function* watchlogin(){
    yield takeLatest("CHECK_LOGIN",checklogin)
}
function* checktoken(action){
    try {
        const ifuser=yield Api.checktoken(action.token);
        yield put({type:'IF_USER',ifuser:ifuser});
    } catch (e) {
        console.log(e);
    }
}
export function* watchchecktoken(){
    yield takeLatest("CHECK_TOKEN",checktoken)
}