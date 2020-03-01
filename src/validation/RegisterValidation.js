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

/**
 * Produce input as a 62 in first key
 * @param {String} mobileNumber 
 */
export const remapMobileNumber = (mobileNumber) => {
    var totalArr = mobileNumber.length
    var firstDigit = mobileNumber.substr(0, 1)
    if(firstDigit == '0') {
        var number = mobileNumber.substr(1, totalArr)
        return `62${number}`
    }
    return mobileNumber
}

/**
 * Email validate with min 6 char
 * @param {String} email 
 */
export function validateEmail(email) {
    if(email.length > 6) {
        let data = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,6})+$/;
        if (data.test(String(email).toLowerCase()) === false) return false;
        return true;
    }
    return true;
}