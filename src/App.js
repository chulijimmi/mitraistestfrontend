import React from 'react'
import {Provider} from 'react-redux'
import './css/Main.css'
import Registration from './template/Registration'
import configureStore from './store'
const store = configureStore()

function FabelioApp() {
    return(
        <Provider store={store}>
            <Registration />
        </Provider>
    )
}

export default FabelioApp