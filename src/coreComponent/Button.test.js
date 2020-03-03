import * as React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import MyButton from './Button';

function setup(input) {
    const props = {
        onClick: jest.fn(),
        label: input.label,
        loading: input.loading
    }
    return props;
}

/**
 * Test case button component:
 * 1. There is label value if props label exist
 * 2. Button component will render text Loading if
 * have props loading equal true
 */
describe('Button', () => {

    let mount;

    beforeEach(() => {
        mount = createMount()
    })

    afterEach(() => {
        mount.cleanUp()
    })

    // test case 1
    it ('<MyButton /> have label REGISTER', () => {
        const props = setup({label: 'REGISTER', loading: false});
        const wrapper = mount(<MyButton {...props} />);
        expect (wrapper.props().label).toEqual('REGISTER');
    })

    //test case 2
    it ('<MyButton /> should render LOADING', () => {
        const props = setup({label: 'REGISTER', loading: true});
        const wrapper = mount(<MyButton {...props} />);
        expect (wrapper.find('.MuiButton-label').text()).toEqual('LOADING');
    })
})
