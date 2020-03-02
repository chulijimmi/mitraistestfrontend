import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router'
import { persistReducer } from 'redux-persist'
import reducer from '../reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import { RootPersistedConfig } from '../persist'
export const history = createBrowserHistory()

const composeEnhancers = compose
const persistedReducer = persistReducer(RootPersistedConfig, reducer(history))
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware,logger]

export default function configureStore (initState){
    const store = createStore(persistedReducer, initState, composeEnhancers(applyMiddleware(...middlewares), applyMiddleware(routeMiddleware)))
    sagaMiddleware.run(rootSaga);
    if(module.hot){
        module.hot.accept('../reducers/index',()=>{
            const nextReducer = require('../reducers/index')
            store.replaceReducer(nextReducer)
        })
    }
    return store;
}
