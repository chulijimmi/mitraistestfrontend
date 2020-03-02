import {
    SET_STATE_REGISTRATION,
    SET_DOB_STATE_REGISTRATION,
    SAGA_REGISTRATION,
    SHOW_LOGIN_BUTTON_REGISTRATION,
    HIDE_LOGIN_BUTTON_REGISTRATION,
    SUCCESS_REGISTRATION,
    SET_IS_FETCHING_API
} from '../constant/Registration'

/**
 * Use to manage value of state global Registration
 * related on reducers Registration
 * e.g keyState = mobileNumber and valState = 0812XXXX
 * @param {String} keyState 
 * @param {String} valState 
 */
export const setStateRegistration = (keyState: String, valState: String) => {
    return {
        type: SET_STATE_REGISTRATION,
        payload: { keyState, valState }
    }
}

/**
 * Use to manage value of state dob Registration
 * related on reducers Registration
 * e.g keyDob = month and valDob = 1
 * @param {String} keyDob 
 * @param {Number} valDob 
 */
export const setDobStateRegistration = (keyDob: String, valDob: Number) => {
    return {
        type: SET_DOB_STATE_REGISTRATION,
        payload: { keyDob, valDob }
    }
}

/**
 * Task runner on saga, when user click the register button
 */
export const sagaRegistration = () => {
    return {
        type: SAGA_REGISTRATION
    }
}

/**
 * Use this action to show login button component
 * when fetching with api registration
 * This action should be handle in saga related on
 * sagaRegistration
 */
export const showLoginButtonRegistration = () => {
    return {
        type: SHOW_LOGIN_BUTTON_REGISTRATION
    }
}

/**
 * Use this action to hide the login button component
 * after the process of success registration 
 */
export const hideLoginButtonRegistration = () => {
    return {
        type: HIDE_LOGIN_BUTTON_REGISTRATION
    }
}

/**
 * Call success conditions and reset the state of
 * Registration as initial state.
 * This should be call when registration success.
 * So this action will call in saga related to
 * SagaRegistration.
 */
export const setSuccessRegistration = () => {
    return {
        type: SUCCESS_REGISTRATION
    }
}

/**
 * Manage the UI of screen or button
 * It can use on handle the loading of
 * component.
 * @param {Boolean} statusFetch 
 */
export const setIsFetchingApi = (statusFetch) => {
    return {
        type: SET_IS_FETCHING_API,
        payload: { statusFetch }
    }
}