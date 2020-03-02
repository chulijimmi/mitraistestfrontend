import React from 'react'
import { Provider, ReactReduxContext} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router'
import './css/Main.css'
import MainApp from './template/MainApp'
import configureStore, { history } from './store'


const store = configureStore()

function Root(props) {
    console.log('Root props', props)
    return(
        <div>
            <h1>Root Screen</h1>
            <a href="#" onClick={() => props.history.push('/golf', {screen: 'Golf'})}>Go to golf</a>
        </div>
    )
}

function Golf(props) {
    console.log('Screen golf', props)
    return(
        <div>
            <h1>Golf Screen</h1>
            <a href="#" onClick={() => props.history.push('/oscar')}>Go to oscar</a>
            <br/><br/><br/>
            <a href="#" onClick={() => props.history.go(-2)}>Go back</a>
        </div>
    )
}

function Oscar(props) {
    console.log('Screen oscar', props)
    return(
        <div>
            <h1>Oscar Screen</h1>
            <a href="#" onClick={() => props.history.push('/bravo')}>Go to bravo</a>
            <br/><br/><br/>
            <a href="#" onClick={() => props.history.go(-2)}>Go back</a>
        </div>
    )
}

function Bravo(props) {
    console.log('Screen bravo', props)
    return(
        <div>
            <h1>Bravo Screen</h1>
            <a href="#" onClick={() => props.history.push('/')}>Back to root</a>
        </div>
    )
}

function App({ history, context }) {
    console.log('App', {history, context})
    return(
        <ConnectedRouter history={history} context={context}>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/root" />} />
                <Route path="/root" render={({ staticContext, ...props}) => <Root {...props} />} />
                <Route path="/golf" render={({ staticContext, ...props}) => <Golf {...props} />} />
                <Route path="/oscar" render={({ staticContext, ...props}) => <Oscar {...props} />} />
                <Route path="/bravo" render={({ staticContext, ...props}) => <Bravo {...props} />} />
            </Switch>
        </ConnectedRouter>
    )
}

function FabelioApp() {
    return(
        <Provider store={store} context={ReactReduxContext}>
            <App history={history} context={ReactReduxContext} />
        </Provider>
    )
}

export default FabelioApp