import React from 'react'
import { Provider, ReactReduxContext} from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import './css/Main.css'
import MainApp from './template/MainApp'
import configureStore, { history } from './store'


const store = configureStore()

function App({ history, context }) {
    return(
        <ConnectedRouter history={history} context={context}>
            <Route path="/" render={({ staticContext, ...props}) => <MainApp {...props}/>} />
        </ConnectedRouter>
    )
}

function MitraisApp() {
    return(
        <Provider store={store} context={ReactReduxContext}>
            <App history={history} context={ReactReduxContext} />
        </Provider>
    )
}

export default MitraisApp