import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Container, Typography } from '@material-ui/core'
import WindowDimmension from '../hook/WindowDimmension'
import Colors from '../constant/Colors'
import InputText from '../coreComponent/InputText'
import Button from '../coreComponent/Button'
import DobButton from '../baseComponent/DobButton'
import GenderOptions from '../baseComponent/GenderOptions'
import Footer from './Footer'
import { sagaRegistration, setStateRegistration, setDobStateRegistration } from '../actions/Registration'
import { connect } from 'react-redux'
const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grid: {
        margin: `0px auto`
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: Colors.greySoft
    },
    title: {
        textAlign: 'left',
        marginBottom: 15
    }
})

/**
 * RegistrationForm connected with reducers Registration
 * @param {Object} props 
 */
function RegistrationForm(props) {
    const { classes } = props
    const { sagaRegistration, setStateRegistration, setDobStateRegistration } = props
    const { 
        mobileNumber, 
        firstName, 
        lastName, 
        dob, 
        gender, 
        email, 
        showLoginButton
    } = props
    const { errorCode, errorMessage } = props
    const { width } = WindowDimmension()
    const smSize = (width) => {
        if(width < 1208 && width > 786) return 6
        if(width < 786) return 12
        return 6
    }

    return(
        <React.Fragment>
            <Container sm={12}>
                <Grid item xs={12} sm={smSize(width)} className={classes.grid}>
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h5" component="h1" className={classes.title} color="primary">Registration</Typography>
                        <InputText label='Mobile number' onChange={(val) => console.log(val)} width={width} />
                        <InputText label='First name' onChange={(val) => console.log(val)} width={width} />
                        <InputText label='Last name' onChange={(val) => console.log(val)} width={width} />
                        <DobButton 
                            onChangeMonth={(value) => console.log('onChangeMonth', value)}
                            onChangeDay={(value) => console.log('onChangeDay', value)}
                            onChangeYear={(value) => console.log('onChangeYear', value)} />
                        <GenderOptions
                            checked={gender}
                            onChange={(value) => setStateRegistration('gender', value)} />
                        <InputText label='Email' onChange={(val) => console.log(val)} width={width} />
                        <Button label={'Register'} onClick={() => sagaRegistration()}/>
                    </Paper>
                </Grid>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

const mtp = ({ErrorHandling, Registration}) => {
    const { errorCode, errorMessage } = ErrorHandling
    const { mobileNumber, firstName, lastName, dob, gender, email, showLoginButton } = Registration
    return { errorCode, errorMessage, mobileNumber, firstName, lastName, dob, gender, email, showLoginButton }
}
export default connect(mtp, {sagaRegistration, setStateRegistration, setDobStateRegistration})(withStyles(styles)(RegistrationForm))