import RegistrationReducer from '../reducers/Registration'
import * as typeReg from '../constant/Registration'

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
        showLoginButton: false,
        isRegistered: false,
        isFetchingApi: false
    }
    //Test case the initial state
    it ('should return the initial state', () => {
        expect (RegistrationReducer(undefined, {})).toEqual(initState)
    })

    //Test case when the state is change
    it ('should change value of state', () => {
        const keyState = 'mobileNumber';
        const valState = '081249218736';
        const action = {
            type: typeReg.SET_STATE_REGISTRATION,
            payload: {keyState, valState}
        }
        expect (RegistrationReducer(initState, action)).toEqual({
            ...initState,
            mobileNumber : '081249218736'
        })
    })
})