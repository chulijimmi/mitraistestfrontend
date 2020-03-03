import * as React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import GenderOptions from './GenderOptions'
import RadioButton from '../coreComponent/RadioButton'

/**
 * Test case on gender options:
 * 1. If radio option click and receive props checked 1,
 * property checked Radio button on male should be equal 1
 * 
 * 2. If radio option click and receive props checked 0,
 * property checked Radio button on male should be equal 0
 */
describe ('<GenderOptions /> Checked conditions', () => {
    let mount;

    beforeEach(() => {
        mount = createMount()
    })

    afterEach(() => {
        mount.cleanUp();
    })

    //Test 1
    it ('Check is checked on clicked for Male Options', () => {
        const props = {
            checked: 1,
            onChange: jest.fn()
        }
        const wrapper = mount(<GenderOptions {...props}/>);
        wrapper.find(RadioButton).at(0);
        expect (wrapper.props().checked).toBe(1);
    })

    //Test 2
    it ('Check is checked on clicked for Female Options', () => {
        const props = {
            checked: 0,
            onChange: jest.fn()
        }
        const wrapper = mount(<GenderOptions {...props}/>);
        wrapper.find(RadioButton).at(0);
        expect (wrapper.props().checked).toBe(0);
    })
})