/**
 * Registration definition:
 * To set value of state registration as SET_STATE_REGISTRATION
 * 
 * Task runner on handle by SAGA_REGISTRATION related on condition
 * when the users click the register button
 * 
 * To Toogle the login button, use it SHOW_LOGIN_BUTTON_REGISTRATION
 * and HIDE_LOGIN_BUTTON_REGISTRATION
 * 
 * And for set the sucess of registration call SUCCESS_REGISTRATION in saga
 * based on condition no error from response.
 * 
 * To do manage the loading screen or button, etc.
 * You can use SET_IS_FETCHING_API with input true or false
 */
export const SET_STATE_REGISTRATION = 'set_state_registration'
export const SET_DOB_STATE_REGISTRATION = 'set_dob_state_registration'
export const SAGA_REGISTRATION = 'saga_registration'
export const SHOW_LOGIN_BUTTON_REGISTRATION = 'show_login_button_registration'
export const HIDE_LOGIN_BUTTON_REGISTRATION = 'hide_login_button_registration'
export const SUCCESS_REGISTRATION = 'success_registration'
export const SET_IS_FETCHING_API = 'set_is_fetching_api'