import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemSelectOptions from './ItemSelectOptions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Color from '../constant/Colors'

const styles = {
    container: {
        position: 'relative'
    },
    filterButtonStyle: {
        border: `1px solid ${Color.primary}`
    },
    labelFilterStyleButton: {
        fontSize: 14,
        float: 'left',
        padding: 10
    },
    labelFilterStyleIcon: {
        float: 'right'
    }
}

class SelectOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleFilterStyle() {
        this.setState({open: !this.state.open})
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    /**
     * You can overwrite this function to
     * render the button filter
     */
    renderButtonFilter(){
        const {labelButton} = this.props;
        return(
            <div style={styles.filterButtonStyle} className={'clearfix'} onClick={this.handleClick.bind(this)}>
                <span style={styles.labelFilterStyleButton}>{labelButton}</span>
                <span style={styles.labelFilterStyleIcon}>
                    <ArrowDropDownIcon color="primary" fontSize={'large'}/>
                </span>
            </div>
        )
    }

    /**
     * You can overwrite this function
     * to render the list of filter
     */
    renderItemSelectOption(){
        const {data} = this.props;
        return(
            <ItemSelectOptions
                show={this.state.open} 
                itemSelect={data}
                onSelect={(value) => this.props.onSelect(value)}
            />
        )
    }

    render(){
        return(
            <div style={styles.container} onClick={() => this.handleFilterStyle()}>
                {this.renderButtonFilter()}
                {this.renderItemSelectOption()}
            </div>
        )
    }
}


SelectOptions.propTypes = {
    labelButton: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default SelectOptions