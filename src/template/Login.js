import React from 'react'
import Footer from '../component/Footer'
import Colors from '../constant/Colors'

const Style = {
    login: {
        background: Colors.greySoft,
        width: '100%',
        height: 500
    },
    titleLogin: {
        color: Colors.primary,
        textAlign: 'center'
    }
}

function Login() {
    return(
        <div>
            <div style={Style.login}>
                <h4 style={Style.titleLogin}>This is login page</h4>
            </div>
            <Footer />
        </div>
    )
}

export default Login