import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

function MyButton(props) {
    return(
        <Button 
            color={props.color}
            variant="contained"
            fullWidth={true} 
            onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
}

MyButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default MyButton