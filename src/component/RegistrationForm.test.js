import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import RegistrationForm from '../component/RegistrationForm'
import Button from '../coreComponent/Button'
import InputText from '../coreComponent/InputText'
import { mount } from 'enzyme'
import MessagingError from '../validation/MessagingError'

const reduxStore = configureStore()

/**
 * Test case RegistrationForm component will show
 * error component if the validation false
 */
export const mountWithProvider = children => (store = reduxStore) => mount(
    <Provider store={store}>{children}</Provider>
)

/**
 * Test case RegistrationForm component:
 * 1. Render error component with conditions if receive props errorCode and errorMessage 
 * 
 * 2. Condition when the input text on mouseOver then value is empty
 * 
 * 3. The login button will show if receive props showLoginButton equal true
 * This case only when success registration conditions
 * 
 */

describe ('<RegistrationForm /> Component', () => {

    //Test 1
    it ('show error component only is required', () => {
        const propsMobileNumber = {
            errorCode: MessagingError.mobileNumber.isRequired.error,
            errorMessage: MessagingError.mobileNumber.isRequired.message
        }

        const wrapperMobileNumber = mountWithProvider(<RegistrationForm {...propsMobileNumber} />)();
        expect (wrapperMobileNumber.exists()).toBe(true);
        expect (wrapperMobileNumber.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();

        const propsFirstName = {
            errorCode: MessagingError.mobileNumber.isRequired.error,
            errorMessage: MessagingError.mobileNumber.isRequired.message
        }

        const wrapperFirstName = mountWithProvider(<RegistrationForm {...propsFirstName} />)();
        expect (wrapperFirstName.exists()).toBe(true);
        expect (wrapperFirstName.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();

        const propsLastName = {
            errorCode: MessagingError.mobileNumber.isRequired.error,
            errorMessage: MessagingError.mobileNumber.isRequired.message
        }

        const wrapperLastName = mountWithProvider(<RegistrationForm {...propsLastName} />)();
        expect (wrapperLastName.exists()).toBe(true);
        expect (wrapperLastName.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();

        const propsEmail = {
            errorCode: MessagingError.mobileNumber.isRequired.error,
            errorMessage: MessagingError.mobileNumber.isRequired.message
        }

        const wrapperEmail = mountWithProvider(<RegistrationForm {...propsEmail} />)();
        expect (wrapperEmail.exists()).toBe(true);
        expect (wrapperEmail.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();
    })

    //Test 1
    it ('show error component when mobileNumber and email is exist', () => {
        const propsMobileNumber = {
            errorCode: MessagingError.mobileNumber.isExist.error,
            errorMessage: MessagingError.mobileNumber.isExist.message
        }

        const wrapperMobileNumber = mountWithProvider(<RegistrationForm {...propsMobileNumber} />)();
        expect (wrapperMobileNumber.exists()).toBe(true);
        expect (wrapperMobileNumber.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();

        const propsEmail = {
            errorCode: MessagingError.email.isExist.error,
            errorMessage: MessagingError.email.isExist.message
        }

        const wrapperEmail = mountWithProvider(<RegistrationForm {...propsEmail} />)();
        expect (wrapperEmail.exists()).toBe(true);
        expect (wrapperEmail.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();
    })

    //Test 1
    it ('show error component on mobileNumber not valid as indonesian phone', () => {
        const propsMobileNumber = {
            errorCode: MessagingError.mobileNumber.isNotValid.error,
            errorMessage: MessagingError.mobileNumber.isNotValid.message
        }
        const wrapper = mountWithProvider(<RegistrationForm {...propsMobileNumber} />)();
        expect (wrapper.exists()).toBe(true);
        expect (wrapper.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();
    })

    //Test 2
    it ('show error component onMouseOver text input and value empty', () => {
        const props = {
            mobileNumber: ''
        }
        for (let i = 0; i < 3; i++) {
            const wrapper = mountWithProvider(<RegistrationForm {...props} />)();
            expect (wrapper.find(InputText).exists()).toBe(true);
            wrapper.find(InputText).at(i).simulate('focus')
            wrapper.find(InputText).at(i).simulate('blur')
            expect (wrapper.find(RegistrationForm).render().find('div.errorBox')).toBeTruthy();
        }
    })

    //Test 3
    it ('show login button after success registration', () => {
        const props = {
            showLoginButton: true
        }
        const wrapper = mountWithProvider(<RegistrationForm {...props} />)();
        expect (wrapper.find(Button).exists()).toBe(true);
    })
})