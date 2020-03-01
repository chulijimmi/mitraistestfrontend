import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constant/Colors'
import Button from '../coreComponent/Button'
import { connect } from 'react-redux'
import { setStateRegistration } from '../actions/Registration'
const Style = {
    footer: {
        marginTop: 30, 
        width: '100%',
        padding: 30,
        background:
        Colors.secondary,
        contentAlign: 'center'
    },
    
    footerTitle: { 
        color: Colors.white, 
        textAlign: 'center'
    }
}

function ButtonLogin(props) {
    const { setStateRegistration } = props
    return(
        <Button 
            label={'Login'} 
            onClick={() => setStateRegistration('showLoginButton', false)} />
    )
}

function ContentFooter() {
    return(
        <h1 style={Style.footerTitle}>Footer</h1>
    )
}

/**
 * Connected to reducer Registration
 * Button login show only if register button clicked
 * @param {Object} props 
 */
function Footer(props) {
    const {setStateRegistration, showLoginButton} = props
    return(
        <div style={Style.footer}>
            {
                showLoginButton ? <ButtonLogin setStateRegistration={setStateRegistration}/> : <ContentFooter />
            }
        </div>
    )
}

Footer.propTypes = {
    showLoginButton: PropTypes.func.isRequired,
    setStateRegistration: PropTypes.func.isRequired
}

const mtp = ({Registration}) => {
    const {showLoginButton} = Registration
    return {showLoginButton}
}

export default connect(mtp, {setStateRegistration})(Footer)