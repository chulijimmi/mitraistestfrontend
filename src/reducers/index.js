import {combineReducers} from 'redux'
import ErrorHandling from './ErrorHandling'
import Registration from './Registration'

export default () => combineReducers({
    ErrorHandling,
    Registration
})