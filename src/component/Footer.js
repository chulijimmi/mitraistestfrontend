import React from 'react'
import Colors from '../constant/Colors'
import Button from '../coreComponent/Button'
const Style = {
    footer: {
        width: 500,
        height: 150,
        backgroundColor: Colors.secondary
    }
}

function Footer(props) {
    return(
        <div>
            <div style={{ marginTop: 30, width: '100%', padding: 30, background: Colors.secondary, contentAlign: 'center'}}>
                <h1 style={{ color: Colors.white, textAlign: 'center' }}>Footer</h1>
            </div>
            <div style={{ marginTop: 30, width: '100%', padding: 30, background: Colors.greySoft, contentAlign: 'center'}}>
                
            </div>
        </div>
    )
}

export default Footer