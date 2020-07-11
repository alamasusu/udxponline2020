import {createStore,combineReducers,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import login from './reducers/loginReducer';
const sagaMiddleware=createSagaMiddleware();
const reducer=combineReducers({
    login
})
const store=createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store;