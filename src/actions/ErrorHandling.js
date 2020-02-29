import {
    SHOW_ERROR_MESSAGE,
    HIDE_ERROR_MESSAGE,
    SET_ERROR_MESSAGE
} from '../constant/ErrorHandling'

/**
 * Show the error message alert component
 * related on reducer state ErrorHandling
 */
export const showErrorMessage = () => {
    return {
        type: SHOW_ERROR_MESSAGE
    }
}

/**
 * Hide the message alert component 
 * related on reducer state ErrorHandling
 */
export const hideErrorMessage = () => {
    return {
        type: HIDE_ERROR_MESSAGE
    }
}

/**
 * Set the errorCode and errorMessage state 
 * related on reducer state ErrorHandling
 * @param {String} message
 */
export const setErrorMessage = (code: Number, message: String) => {
    return {
        type: SET_ERROR_MESSAGE,
        payload: { code, message }
    }
}