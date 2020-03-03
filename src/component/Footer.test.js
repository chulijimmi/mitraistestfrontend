import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import Footer from '../component/Footer'
import { mount } from 'enzyme'

const reduxStore = configureStore()

/**
 * Test case footer component will show
 * login button or render footer it self
 */
export const mountWithProvider = children => (store = reduxStore) => mount(
    <Provider store={store}>{children}</Provider>
)

/**
 * Test case footer component :
 * 1. Should render text footer if the props
 * showLoginButton equal false
 * 
 * 2. Shoudl render button login if the props
 * showLoginButton equal true
 */
describe ('<Footer /> Component', () => {

    // test case 1
    it ('should render text Footer', () => {
        const props = {
            showLoginButton: false,
            hideLoginButtonRegistration: jest.fn()
        }
        const wrapper = mountWithProvider(<Footer {...props}/>)();
        expect (wrapper.exists()).toBe(true);
        expect (wrapper.find('h1').text()).toEqual('Footer');
    })

    // test case 2
    it ('should render button login', () => {
        const props = {
            showLoginButton: true,
            hideLoginButtonRegistration: jest.fn()
        }
        const wrapper = mountWithProvider(<Footer {...props} />)();
        expect (wrapper.exists()).toBe(true);
        expect (wrapper.props().children.props.showLoginButton).toEqual(true);
        expect (wrapper.find(Footer).render().find('.MuiButton-label')).toBeTruthy();
    })
})