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

/**
 * State reducer to manage the error
 * from response api. This one is used by component also
 * such as ErrorComponent, etc.
 * @param {Object} state 
 * @param {Function} action 
 */
export default function ErrorHandling(state = initState, action) {
    switch (action.type) {
        case SET_ERROR_MESSAGE:

            const {code, message} = action.payload

            return{
                ...state,
                errorCode: code,
                errorMessage: message,
                showErrorComponent: true
            }
        
        case SHOW_ERROR_MESSAGE:
            return {
                ...state,
                showErrorComponent: true
            }

        case HIDE_ERROR_MESSAGE:
            return {
                ...state,
                ...initState
            }
        
        default:
            return state
    }
}