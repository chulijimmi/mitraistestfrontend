import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constant/Colors'

const Style = {
    box: {
        padding: '10px 0px',
        background: Colors.error,
        border: `1px solid ${Colors.greyLighteen}`,
        position: 'relative',
        marginBottom: 15
    },
    text: {
        color: Colors.white,
        fontSize: 14
    },
    arrow: {
        margin: `0 auto`,
        width: 0,
        height: 0,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: `10px solid ${Colors.error}`,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -10
    }
}

/**
 * Error component have object with message
 * e.g { message: 'Please enter valid indonesian phone number' }
 * @param {Object} props 
 */
function ErrorComponent(props) {
    return(
        <div style={Style.box} onClick={() => props.hide()}>
            <div style={Style.arrow}></div>
            <span style={Style.text}>{props.message}</span>
        </div>
    )
}

ErrorComponent.propTypes = {
    message: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired
}

export default ErrorComponent