import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import { shallow } from 'enzyme'
import Footer from '../component/Footer'
const store = configureStore()

function setup() {
    const props = {
        showLoginButton: jest.fn(),
        setStateRegistration: jest.fn()
    }

    const wrapper = shallow(
        <div class='f_class'>
            <h1>Footer</h1>
            <span>Child link</span>
        </div>
    );

    return {
        props,
        wrapper
    }
}

describe('Footer', () => {
    console.log('Footer', Footer)
    it('shoudl render self and subcomponents', () => {
        const { wrapper } = setup()
        expect(wrapper.find('h1').text()).toEqual('Footer');
    })
})