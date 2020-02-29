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
import { 
    sagaRegistration,
    setStateRegistration,
    setDobStateRegistration
} from '../actions/Registration'
import { connect } from 'react-redux'
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
        dob, 
        gender, 
        email,
        showLoginButton
    } = props
    const { errorCode, errorMessage } = props

    //State Logic On Validate Form
    const [isValidMobileNumber, setValidMobileNumber] = useState(true)
    const handleCheckMobileNumber = () => {
        if (mobileNumber == '')
        setValidMobileNumber(!isValidMobileNumber)
    }

    const [isValidFirstName, setValidFirstName] = useState(true)
    const handleCheckFirstName = () => {
        if (firstName == '')
        setValidFirstName(!isValidFirstName)
    }

    const [isValidLastName, setValidLastName] = useState(true)
    const handleCheckLastName = () => {
        if (lastName == '')
        setValidLastName(!isValidLastName)
    }

    const [isValidEmail, setValidEmail] = useState(true)
    const handleCheckEmail = () => {
        if(email == '')
        setValidEmail(!isValidEmail)
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
        <Container sm={12}>
            <BlockedScreen show={showLoginButton}/>
            <Grid item xs={12} sm={smSize(width)} className={classes.grid}>
                <Paper elevation={0} className={classes.paper}>
                    <RenderTitle></RenderTitle>
                    {
                        !isValidMobileNumber && 
                        <ErrorComponent 
                            message={'Mobile number is required'} 
                            hide={() => setValidMobileNumber(true)}
                        />
                    }
                    <InputText
                        label='Mobile number' 
                        width={width}
                        onBlur={handleCheckMobileNumber}
                        onChange={(val) => setStateRegistration('mobileNumber', val)} />
                    {
                        !isValidFirstName && 
                        <ErrorComponent 
                            message={'First name is required'}
                            hide={() => setValidFirstName(true)} />
                    }
                    <InputText 
                        label='First name'
                        width={width}
                        onBlur={handleCheckFirstName}
                        onChange={(val) => setStateRegistration('firstName', val)} />
                    {
                        !isValidLastName &&
                        <ErrorComponent 
                            message={'Last name is required'}
                            hide={() => setValidLastName(true)} />
                    }
                    <InputText
                        label='Last name'
                        width={width}
                        onBlur={handleCheckLastName}
                        onChange={(val) => setStateRegistration('lastName', val)} />
                    <DobButton 
                        onChangeMonth={(value) => setDobStateRegistration('month', value)}
                        onChangeDay={(value) => setDobStateRegistration('day', value)}
                        onChangeYear={(value) => setDobStateRegistration('year', value)} />
                    <GenderOptions
                        checked={gender}
                        onChange={(value) => setStateRegistration('gender', value)} />
                    {
                        !isValidEmail &&
                        <ErrorComponent 
                            message={'Email is required'}
                            hide={() => setValidEmail(true)} />
                    }
                    <InputText
                        label='Email'
                        width={width}
                        onBlur={handleCheckEmail}
                        onChange={(val) => setStateRegistration('email', val)} />
                    <Button color="secondary" label={'Register'} onClick={() => sagaRegistration()}/>
                </Paper>
            </Grid>
        </Container>
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
        dob,
        gender,
        email,
        showLoginButton
    } = Registration

    return { 
        errorCode, 
        errorMessage, 
        mobileNumber, 
        firstName, 
        lastName,
        dob,
        gender,
        email,
        showLoginButton
    }
}

export default connect(mtp, {
    sagaRegistration,
    setStateRegistration, 
    setDobStateRegistration
})(withStyles(styles)(RegistrationForm))