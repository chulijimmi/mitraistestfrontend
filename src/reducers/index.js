import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import ErrorHandling from './ErrorHandling'
import Registration from './Registration'

export default (history) => combineReducers({
    router: connectRouter(history),
    ErrorHandling,
    Registration
})