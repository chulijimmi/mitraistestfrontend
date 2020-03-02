import React from 'react'
import { Provider, ReactReduxContext} from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import './css/Main.css'
import configureStore, { history } from './store'
import Registration from '../src/template/Registration'
import Login from '../src/template/Login'


const store = configureStore()

function App({ history, context }) {
    return(
        <ConnectedRouter history={history} context={context}>
            <Switch>
                <Route exact path="/mitraistestfrontend" render={() => <Redirect to="/root" />} />
                <Route path="/root" render={({ staticContext, ...props}) => <Registration {...props} />} />
                <Route path="/login" render={({ staticContext, ...props}) => <Login {...props}/>} />
            </Switch>
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