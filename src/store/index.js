import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from 'redux-persist'
import reducer from '../reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import { RootPersistedConfig } from '../persist'

const composeEnhancers = compose
const persistedReducer = persistReducer(RootPersistedConfig, reducer())
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware,logger]

export default function configureStore (initState){
    const store = createStore(persistedReducer, initState, composeEnhancers(applyMiddleware(...middlewares)))
    sagaMiddleware.run(rootSaga);
    if(module.hot){
        module.hot.accept('../reducers/index',()=>{
            const nextReducer = require('../reducers/index')
            store.replaceReducer(nextReducer)
        })
    }
    return store;
}
