import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import RegistrationForm from './RegistrationForm'
import { mount } from 'enzyme';
import authApi from '../api/AuthApi'

const reduxStore = configureStore()

jest.mock('../api/AuthApi');


/**
 * test case RegistrationForm using async
 * ErrorComponent will show error component 
 * if there is error form response api.
 */

describe ('<RegistrationForm /> finding error component', () => {
    it ('count 1 if mobileNumber is empty', async (done) => {
        const payload = {
            mobileNumber: '',
            firstName: '',
            lastName: '',
            dob: '',
            email: ''
        }
        const response = await authApi.register(payload)
        const mountWithProvider = children => (store = reduxStore) => mount(
            <Provider store={store}>{children}</Provider>
        )
        const wrapper = mountWithProvider(<RegistrationForm {...response}/>)();
        setTimeout(() => {
            wrapper.update()
            expect (wrapper.find('div.errorBox').length).toEqual(1)
        })
        done()
    })

    it ('count 1 if firstName is empty', async done => {
        const payload = {
            mobileNumber: '08124921836',
            firstName: '',
            lastName: '',
            dob: '',
            email: ''
        }
        const response = await authApi.register(payload)
        const mountWithProvider = children => (store = reduxStore) => mount(
            <Provider store={store}>{children}</Provider>
        )
        const wrapper = mountWithProvider(<RegistrationForm {...response}/>)();
        setTimeout(() => {
            wrapper.update()
            expect (wrapper.find('div.errorBox').length).toEqual(1)
        })
        done()
    })

    it ('count 1 if lastName is empty', async done => {
        const payload = {
            mobileNumber: '08124921836',
            firstName: 'Chuli',
            lastName: '',
            dob: '',
            email: ''
        }
        const response = await authApi.register(payload)
        const mountWithProvider = children => (store = reduxStore) => mount(
            <Provider store={store}>{children}</Provider>
        )
        const wrapper = mountWithProvider(<RegistrationForm {...response}/>)();
        setTimeout(() => {
            wrapper.update()
            expect (wrapper.find('div.errorBox').length).toEqual(1)
        })
        done()
    })

    it ('count 1 if email is empty', async done => {
        const payload = {
            mobileNumber: '08124921836',
            firstName: 'Chuli',
            lastName: 'jimmi',
            dob: '',
            email: ''
        }
        const response = await authApi.register(payload)
        const mountWithProvider = children => (store = reduxStore) => mount(
            <Provider store={store}>{children}</Provider>
        )
        const wrapper = mountWithProvider(<RegistrationForm {...response}/>)();
        setTimeout(() => {
            wrapper.update()
            expect (wrapper.find('div.errorBox').length).toEqual(1)
        })
        done()
    })

    it ('count 1 if mobileNumber is exist', async done => {
        const payload = {
            mobileNumber: '081249218736',
            firstName: 'Chuli',
            lastName: 'jimmi',
            dob: '',
            email: 'jimmi.ext@gmail.com'
        }
        const response = await authApi.register(payload)
        const mountWithProvider = children => (store = reduxStore) => mount(
            <Provider store={store}>{children}</Provider>
        )
        const wrapper = mountWithProvider(<RegistrationForm {...response}/>)();
        setTimeout(() => {
            wrapper.update()
            expect (wrapper.find('div.errorBox').length).toEqual(1)
        })
        done()
    })

    it ('count 1 if email address is exist', async done => {
        const payload = {
            mobileNumber: '081249211111',
            firstName: 'Chuli',
            lastName: 'jimmi',
            dob: '',
            email: 'jimmi.ext@gmail.com'
        }
        const response = await authApi.register(payload)
        const mountWithProvider = children => (store = reduxStore) => mount(
            <Provider store={store}>{children}</Provider>
        )
        const wrapper = mountWithProvider(<RegistrationForm {...response}/>)();
        setTimeout(() => {
            wrapper.update()
            expect (wrapper.find('div.errorBox').length).toEqual(1)
        })
        done()
    })

    it ('count 0 if success registration', async done => {
        const payload = {
            mobileNumber: '081249211111',
            firstName: 'Chuli',
            lastName: 'jimmi',
            dob: '',
            email: 'jimmi@gmail.com'
        }
        const response = await authApi.register(payload)
        const mountWithProvider = children => (store = reduxStore) => mount(
            <Provider store={store}>{children}</Provider>
        )
        const wrapper = mountWithProvider(<RegistrationForm {...response}/>)();
        setTimeout(() => {
            wrapper.update()
            expect (wrapper.find('div.errorBox').length).toEqual(0)
        })
        done()
    })

})