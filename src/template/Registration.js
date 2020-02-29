import React from 'react'
import RegistrationForm from '../component/RegistrationForm'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import PrimaryTheme from '../theme/PrimaryTheme'
import { connect } from 'react-redux'
import Footer from '../component/Footer'

function Registration() {
    let theme = createMuiTheme(PrimaryTheme)
    return(
        <MuiThemeProvider theme={theme}>
            <RegistrationForm />
            <Footer/>
        </MuiThemeProvider>
    )
}

const mtp = ({}) => {
    return {}
}

export default connect(mtp, {})(Registration)