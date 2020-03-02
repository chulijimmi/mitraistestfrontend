import React from 'react'
import RegistrationForm from '../component/RegistrationForm'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import PrimaryTheme from '../theme/PrimaryTheme'
import Footer from '../component/Footer'


function Registration(props) {
    console.log('Props Registration', props)
    let theme = createMuiTheme(PrimaryTheme)
    return(
        <MuiThemeProvider theme={theme}>
            <RegistrationForm {...props} />
            <Footer {...props} />
        </MuiThemeProvider>
    )
}

export default Registration