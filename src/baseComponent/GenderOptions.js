import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import RadioButton from '../coreComponent/RadioButton'

function GenderOptions(props) {
    return(
        <Grid container item xs={12}>
            <Grid item xs={6} sm={6} align={"left"}>
                <RadioButton 
                    label={'male'} 
                    checked={props.checked === 1 ? true : false} 
                    onChange={(event) => props.onChange(1)}/>
            </Grid>
            <Grid item xs={6} sm={6} align={"left"}>
                <RadioButton 
                    label={'female'} 
                    checked={props.checked === 0 ? true : false} 
                    onChange={(event) => props.onChange(0)}/>
            </Grid>
        </Grid>
    )
}

GenderOptions.propTypes = {
    checked: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default GenderOptions