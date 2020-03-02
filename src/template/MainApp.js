import React from 'react'
import { compose } from 'redux'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Registration from './Registration'
import Login from './Login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

function Golf(props) {
    console.log('Golf props', props)
    return(
        <div>
            <span onClick={() => props.history.push('/Oscar')}>Test 123</span>
        </div>
    )
}

function Oscar() {
    return(
        <div>
            Oscar
        </div>
    )
}

function Bravo() {
    return(
        <div>
            Bravo
        </div>
    )
}

function MainApp(props) {
    console.log('Main apps props', props)
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={()=> <Redirect to="/golf"/>} />
                <Route path="/golf" component={Golf} />
                <Route path="/oscar" component={Oscar} />
                <Route path="/bravo" component={Bravo} />
            </Switch>
        </BrowserRouter>
    )
}

const mtp = ({Registration}) => {
    const { isRegistered } = Registration
    return { isRegistered }
}

export default connect(mtp, {})(MainApp)