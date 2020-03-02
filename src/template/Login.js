import React from 'react'
import Footer from '../component/Footer'
import Colors from '../constant/Colors'

const Style = {
    container: {
        width: '100vw',
        height: '100vh'
    },
    login: {
        background: Colors.greySoft,
        width: '100%',
        height: 500
    },
    titleLogin: {
        color: Colors.primary,
        textAlign: 'center'
    },
    link: {
        marginTop: 15,
        padding: 15,
        background: Colors.primary,
        color: Colors.white,
        margin: '0px auto',
        display: 'table',
        textDecoration: 'none',
        borderRadius: 5
    }
}

function Login(props) {

    function linkHover(e) {
        e.target.style.background = Colors.secondary
    }

    function linkDefault(e) {
        e.target.style.background = Colors.primary
    }

    return(
        <div style={Style.container}>
            <div style={Style.login}>
                <h4 style={Style.titleLogin}>This is login page</h4>
                <a onMouseOver={linkHover} onMouseOut={linkDefault} style={Style.link} href="#" onClick={() => props.history.goBack()}>Back to register</a>
            </div>
            <Footer />
        </div>
    )
}

export default Login