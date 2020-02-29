import React from 'react'
import PropTypes from 'prop-types'

/**
 * ItemSelectOptions is a child component
 * @param {Object} props 
 * This child component will render data from props
 * related with itemSelect props it self
 */
function ItemSelectOptions(props) {

    const styleItem = {
        content: {
            width: '100%',
        },
        labelItems: {
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left',
            float: 'left',
            padding: '12px 0px',
            borderBottom: '1px solid rgb(239, 239, 239, 1)',
            display: 'inline-block'
        },
        labelContent: {
            marginLeft: 15,
            fontSize: 14
        }
    }

    const styleActive = (open) => ({
        width: '100%',
        background: 'white',
        border: '1px solid rgb(239, 239, 239, 1)',
        WebkitBoxShadow: '0px 3px 5px 0px rgba(163,163,163,0.5)',
        MozBoxShadow: '0px 3px 5px 0px rgba(163,163,163,0.5)',
        boxShadow: '0px 3px 5px 0px rgba(163,163,163,0.5)',
        position: 'absolute',
        zIndex: 3,
        top: 50,
        left: 0,
        right: 0,
        display: open ? 'block' : 'none',
        maxHeight: 200,
        overflow: 'scroll'
    })
    
    const {show, itemSelect} = props
    if(itemSelect.length < 1) {
        return null;
    }

    return(
        <div style={styleActive(show)}>
            {
                itemSelect.map((item, index) => {
                return(
                    <div 
                        key={index.toString()} 
                        style={styleItem.content} 
                        className={'clearfix'}>
                        <div 
                            style={styleItem.labelItems} 
                            onClick={() => props.onSelect(item)}>
                            <span style={styleItem.labelContent}>{item.label}</span>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

ItemSelectOptions.propTypes = {
    show: PropTypes.bool.isRequired,
    itemSelect: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default ItemSelectOptions 