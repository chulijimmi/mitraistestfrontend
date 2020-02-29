import {
    SHOW_ERROR_MESSAGE,
    HIDE_ERROR_MESSAGE,
    SET_ERROR_MESSAGE
} from '../constant/ErrorHandling'

const initState = {
    errorCode: '',
    errorMessage: '',
    showErrorComponent: false
}

export default function ErrorHandling(state = initState, action) {
    switch (action.type) {
        case SET_ERROR_MESSAGE:

            const {code, message} = action.payload

            return{
                ...state,
                errorCode: code,
                errorMessage: message
            }
        
        case SHOW_ERROR_MESSAGE:
            return {
                ...state,
                showErrorComponent: true
            }

        case HIDE_ERROR_MESSAGE:
            return {
                ...state,
                showErrorComponent: false
            }
        default:
            return state
    }
}