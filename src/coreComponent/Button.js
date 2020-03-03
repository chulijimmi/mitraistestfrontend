import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

/**
 * onClick Props will do domething
 * related on props it self
 * @param {Function} props 
 */
function MyButton(props) {
    return(
        <Button 
            color={props.color}
            variant="contained"
            fullWidth={true}
            onClick={() => props.onClick()}>
        {
            props.loading ? 'LOADING' : props.label
        }
        </Button>
    )
}

MyButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
}

export default MyButton