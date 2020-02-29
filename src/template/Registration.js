import React from 'react'
import RegistrationForm from '../component/RegistrationForm'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import PrimaryTheme from '../theme/PrimaryTheme'
import { connect } from 'react-redux'

function Registration() {
    let theme = createMuiTheme(PrimaryTheme)
    return(
        <MuiThemeProvider theme={theme}>
            <RegistrationForm />
        </MuiThemeProvider>
    )
}

const mtp = ({}) => {
    return {}
}

export default connect(mtp, {})(Registration)