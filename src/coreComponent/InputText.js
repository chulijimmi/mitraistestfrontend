import React from 'react'
import PropTypes from 'prop-types'

function InputText(props) {
    const [value, setValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        props.onChange(event.target.value);
    }
    
    const Style = {
        container: {
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
        },
        input: {
            flexGrow: 1,
            width: '100%',
            padding: 10,
            border: `1px solid black`,
            marginBottom: 15,
            fontSize: 15
        },
        '&::focus': {
            outline: 'none',
            border: `1px solid black`,
            boxShadow: '0px 0px 0px 0.1'
        }
    }

    return(
        <div style={Style.container}>
            <input 
                type="text" 
                style={Style.input} 
                onChange={handleChange} 
                value={value}
                placeholder={props.label}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                />
        </div>
    )
}
InputText.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default InputText