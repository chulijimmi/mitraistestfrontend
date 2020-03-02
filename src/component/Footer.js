import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constant/Colors'
import Button from '../coreComponent/Button'
import { connect } from 'react-redux'
import { hideLoginButtonRegistration } from '../actions/Registration'
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

/**
 * Render the button login component
 * @param {Function} props 
 */
function ButtonLogin(props) {
    const { action } = props
    return(
        <Button 
            label={'Login'} 
            onClick={() => action()} />
    )
}

/**
 * Render the content of footer
 */
function ContentFooter() {
    return(
        <h1 style={Style.footerTitle}>Footer</h1>
    )
}

/**
 * Connected to reducer Registration
 * The Button login component is show only
 * success registration process
 * @param {Object} props 
 */
function Footer(props) {
    const {hideLoginButtonRegistration, showLoginButton} = props
    return(
        <div style={Style.footer}>
            {
                showLoginButton ? <ButtonLogin action={hideLoginButtonRegistration}/> : <ContentFooter />
            }
        </div>
    )
}

Footer.propTypes = {
    showLoginButton: PropTypes.bool.isRequired,
    hideLoginButtonRegistration: PropTypes.func.isRequired
}

const mtp = ({Registration}) => {
    const {showLoginButton, hideLoginButtonRegistration} = Registration
    return {showLoginButton, hideLoginButtonRegistration}
}

export default connect(mtp, {hideLoginButtonRegistration})(Footer)