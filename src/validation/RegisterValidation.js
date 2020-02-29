/**
 * Before register all field should be checked
 * This will return error message if not valid
 * @param {Object} state 
 */
export const checkRequiredValidation = (state) => {
    if (state.mobileNumber == '') return {
        isValid: false,
        message: 'Please enter mobile phone number'
    }

    else if (state.firstName == '') return {
        isValid: false,
        message: 'Please enter first name'
    }

    else if (state.lastName == '') return {
        isValid: false,
        message: 'Please enter last name'
    }

    else if (state.email == '') return {
        isValid: false,
        message: 'Please enter email address'
    }

    else return { isValid: true, message: 'Success'}
}