import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Container, Typography } from '@material-ui/core'
import WindowDimmension from '../hook/WindowDimmension'
import Colors from '../constant/Colors'
import InputText from '../coreComponent/InputText'
import Button from '../coreComponent/Button'
import DobButton from '../baseComponent/DobButton'
import GenderOptions from '../baseComponent/GenderOptions'
import { 
    sagaRegistration,
    setStateRegistration,
    setDobStateRegistration
} from '../actions/Registration'
import {
    setErrorMessage,
    hideErrorMessage
} from '../actions/ErrorHandling'
import { connect } from 'react-redux'
import { remapMobileNumber, validateEmail } from '../validation/RegisterValidation'
import MessagingError from '../validation/MessagingError'
import ErrorComponent from '../baseComponent/ErrorComponent'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grid: {
        margin: `0px auto`
    },
    gridBlock: {
        margin: `0px auto`,
        left: 0,
        right: 0,
        width: '100%',
        height: 464,
        position: 'absolute',
        background: '#b9b9b996',
        zIndex: 3000
    },
    footerArea: {
        width: '100%',
        position: 'absolute',
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
 * ErrorComponent will show if some component value is blank
 * or receive the error when fetching with api AuthApi register
 * @param {Object} props 
 */
function RegistrationForm(props) {
    //Props Object
    const { classes } = props

    const { 
        sagaRegistration, 
        setStateRegistration, 
        setDobStateRegistration
    } = props

    const { 
        mobileNumber, 
        firstName, 
        lastName, 
        isFetchingApi, 
        gender, 
        email,
        showLoginButton
    } = props

    const {
        errorCode,
        errorMessage,
        setErrorMessage,
        hideErrorMessage
    } = props

    //State Logic On Validate Form
    const handleCheckMobileNumber = () => {
        if (mobileNumber == '')
        setErrorMessage(
            MessagingError.mobileNumber.isRequired.error,
            MessagingError.mobileNumber.isRequired.message
        )
    }
    
    const handleCheckFirstName = () => {
        if (firstName == '')
        setErrorMessage(
            MessagingError.firstName.isRequired.error,
            MessagingError.firstName.isRequired.message
        )
    }

    const handleCheckLastName = () => {
        if (lastName == '')
        setErrorMessage(
            MessagingError.lastName.isRequired.error,
            MessagingError.lastName.isRequired.message
        )
    }

    const handleCheckEmail = () => {
        if(email == '')
        setErrorMessage(
            MessagingError.email.isRequired.error,
            MessagingError.email.isRequired.message
        )
    }
    
    //Style logic reducing the size screen
    const { width } = WindowDimmension()
    
    const smSize = (width) => {
        if (width < 1208 && width > 786) return 6
        if (width < 786) return 12
        return 6
    }

    function RenderTitle() {
        return(
            <Typography  variant="h5" component="h1" className={classes.title} color="primary">
                Registration
            </Typography>
        )
    }

    function BlockedScreen(props) {
        if(props.show) {
            return(
                <Grid item xs={12} sm={12} className={classes.gridBlock}></Grid>
            )
        }

        return <div></div>
    }

    return(
        <React.Fragment>
        <Container sm={12}>
            <BlockedScreen show={showLoginButton}/>
            <Grid item xs={12} sm={smSize(width)} className={classes.grid}>
                <Paper elevation={0} className={classes.paper}>
                    <RenderTitle></RenderTitle>
                    {
                        errorCode==201 && errorMessage !== '' &&
                        <ErrorComponent hide={hideErrorMessage} message={errorMessage}></ErrorComponent>
                    }
                    <InputText
                        label='Mobile number' 
                        width={width}
                        onBlur={handleCheckMobileNumber}
                        value={mobileNumber}
                        onChange={(val) => setStateRegistration('mobileNumber', remapMobileNumber(val))}/>
                    {
                        errorCode==202 && errorMessage !== '' &&
                        <ErrorComponent hide={hideErrorMessage} message={errorMessage}></ErrorComponent>
                    }
                    <InputText 
                        label='First name'
                        width={width}
                        onBlur={handleCheckFirstName}
                        value={firstName}
                        onChange={(val) => setStateRegistration('firstName', val)} />
                    {
                        errorCode==203 && errorMessage !== '' &&
                        <ErrorComponent hide={hideErrorMessage} message={errorMessage}></ErrorComponent>
                    }
                    <InputText
                        label='Last name'
                        width={width}
                        onBlur={handleCheckLastName}
                        value={lastName}
                        onChange={(val) => setStateRegistration('lastName', val)} />
                    <DobButton 
                        onChangeMonth={(value) => setDobStateRegistration('month', value)}
                        onChangeDay={(value) => setDobStateRegistration('day', value)}
                        onChangeYear={(value) => setDobStateRegistration('year', value)} />
                    <GenderOptions
                        checked={gender}
                        onChange={(value) => setStateRegistration('gender', value)} />
                    {
                        errorCode==204 && errorMessage !== '' &&
                        <ErrorComponent hide={hideErrorMessage} message={errorMessage}></ErrorComponent>
                    }
                    <InputText
                        label='Email'
                        width={width}
                        onBlur={handleCheckEmail}
                        value={email}
                        onChange={(val) => {
                            const email = validateEmail(val)
                            const errMsg = MessagingError.email.isRequired
                            if(!email) {
                                setErrorMessage(errMsg.error, errMsg.message)
                            } else {
                                hideErrorMessage()
                            }
                            setStateRegistration('email', val)
                        }} />
                    <Button loading={isFetchingApi} color="secondary" label={'Register'} onClick={() => {
                        sagaRegistration()
                    }}/>
                </Paper>
            </Grid>
        </Container>
        </React.Fragment>
    )
}

const mtp = ({ErrorHandling, Registration}) => {
    const {
        errorCode,
        errorMessage
    } = ErrorHandling

    const { mobileNumber,
        firstName,
        lastName,
        gender,
        email,
        showLoginButton,
        isFetchingApi
    } = Registration

    return { 
        errorCode, 
        errorMessage, 
        mobileNumber, 
        firstName, 
        lastName,
        gender,
        email,
        showLoginButton,
        isFetchingApi
    }
}

RegistrationForm.propTypes = {
    //Standart error to display the error component
    errorCode: function(props, propName, componentName) {
        const propValue = props[propName]
        if (typeof propValue === 'string') return
        if (typeof propValue === 'number') return
        return new Error(`${componentName} only accept string, or number`)
    },
    errorMessage: PropTypes.string,
    //State of payload to fetching api
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.number,
    email: PropTypes.string,
    //To display login button
    showLoginButton: PropTypes.bool,
    //To display loading text
    isFetchingApi: PropTypes.bool,
    //Action creator to handle process
    sagaRegistration: PropTypes.func,
    setStateRegistration: PropTypes.func,
    setDobStateRegistration: PropTypes.func,
    setErrorMessage: PropTypes.func,
    hideErrorMessage: PropTypes.func
}

export default connect(mtp, {
    sagaRegistration,
    setStateRegistration, 
    setDobStateRegistration,
    setErrorMessage,
    hideErrorMessage
})(withStyles(styles)(RegistrationForm))