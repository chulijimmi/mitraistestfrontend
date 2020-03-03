import MessagingError from '../../validation/MessagingError'

/**
 * Register test async to check the component
 * It's because the error from servers not equal with
 * props component RegistrationForm, so we refactor
 * the response to equal with state ErrorHandle in
 * reducers. Which one the error should be an errorCode and
 * message should be an errorMessage related on 
 * Reducers ErrorHandling
 * @param {Object} payload 
 */
async function register (payload) {
    return await new Promise(resolve => {

        const fakeMobileNumber = ['081249218736', '081249218731'];
        const fakeEmail = ['jimmi.ext@gmail.com', 'abcde@gmail.com'];

        if (payload.mobileNumber == '') {
            resolve({
                errorCode: MessagingError.mobileNumber.isRequired.error,
                errorMessage: MessagingError.mobileNumber.isRequired.message
            })
        } 
        
        else if (payload.firstName == '') {
            resolve({
                errorCode: MessagingError.firstName.isRequired.error,
                errorMessage: MessagingError.firstName.isRequired.message
            })
        }

        else if (payload.lastName == '') {
            resolve({
                errorCode: MessagingError.lastName.isRequired.error,
                errorMessage: MessagingError.lastName.isRequired.message
            })
        }

        else if (payload.email == '') {
            resolve({
                errorCode: MessagingError.email.isRequired.error,
                errorMessage: MessagingError.email.isRequired.message
            })
        }

        else if (fakeMobileNumber.indexOf(payload.mobileNumber)) {
            resolve({
                errorCode: MessagingError.mobileNumber.isExist.error,
                errorMessage: MessagingError.mobileNumber.isExist.message
            })
        }

        else if (fakeEmail.indexOf(payload.email)) {
            resolve({
                errorCode: MessagingError.email.isExist.error,
                errorMessage: MessagingError.email.isExist.message
            })
        }
        
        //Imagine return last id from table sql
        else {
            resolve({
                errorCode: 0,
                errorMessage: 1
            })
        }
    });
};

export default {
    register
}