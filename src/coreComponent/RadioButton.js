import React, { setState, useState } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Radio } from '@material-ui/core'

function RadioButton(props) {

    const [state, setState] = useState(false)
    
    const handleChange = event => {
        setState(event)
        props.onChange(event)
    }

    return(
        <FormControlLabel
            control={
                <Radio checked={props.checked}/>
            }
            label={props.label}
            onChange={handleChange}
        />
    )
}

RadioButton.propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
}

export default RadioButton