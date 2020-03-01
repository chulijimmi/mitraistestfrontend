import RegistrationReducer from '../reducers/Registration'
import ErrorHandlingReducer from '../reducers/ErrorHandling'
import * as typeReg from '../constant/Registration'
import * as typeErr from '../constant/ErrorHandling'

describe('registration reducer', () => {
    const initState = {
        mobileNumber : '',
        firstName: '',
        lastName: '',
        dob: {
            day: '',
            month: '',
            year: '',
        },
        gender: 2, //0: Female, 1: Male
        email: '',
        showLoginButton: false
    }
    it ('should return the initial state', () => {
        expect (RegistrationReducer(undefined, {})).toEqual(initState)
    })

    it ('should change value of state', () => {
        const keyState = 'mobileNumber';
        const valState = '081249218736';
        const action = {
            type: typeReg.SET_STATE_REGISTRATION,
            payload: {keyState, valState}
        }
        expect (RegistrationReducer(initState, action)).toEqual({
            mobileNumber : '081249218736',
            firstName: '',
            lastName: '',
            dob: {
                day: '',
                month: '',
                year: '',
            },
            gender: 2, //0: Female, 1: Male
            email: '',
            showLoginButton: false
        })
    })
})