import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' 
import Registration from './Registration'
import Login from './Login'
import { connect } from 'react-redux'

function MainApp() {
    return(
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/register" />} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}

const mtp = ({Registration}) => {
    const { isRegistered } = Registration
    return { isRegistered }
}

export default connect(mtp, {})(MainApp)