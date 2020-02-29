import React from 'react'
import Button from '@material-ui/core/Button'

function MyButton(props) {
    return(
        <Button color="secondary" variant="contained" fullWidth={true} onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
}

export default MyButton