import React from 'react'
import Colors from '../constant/Colors'
import Button from '../coreComponent/Button'
import { connect } from 'react-redux'

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
    return(
        <Button 
            label={'Login'} 
            onClick={() => console.log('Login pressed')} />
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
    return(
        <div style={Style.footer}>
            {
                props.showLoginButton ? <ButtonLogin /> : <ContentFooter />
            }
        </div>
    )
}

const mtp = ({Registration}) => {
    const {showLoginButton} = Registration
    return {showLoginButton}
}

export default connect(mtp, {})(Footer)