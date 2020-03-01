import { all, fork, takeEvery, select, put, delay, call } from 'redux-saga/effects'
import { SAGA_REGISTRATION } from '../constant/Registration'
import { showLoginButtonRegistration } from '../actions/Registration'
import { setErrorMessage } from '../actions/ErrorHandling'
import AuthApi from '../api/AuthApi'

const apiRegister = payload => AuthApi.register({payload}).then(resp => resp).catch(err => err);

/**
 * Register Button Task Runner
 */
function* __doRegister() {
    try {
        const payload = yield select( state => state.Registration )
        payload.dob = `${payload.dob.year}-${payload.dob.month}-${payload.dob.day}`
        yield put(showLoginButtonRegistration())
        const response = yield call(apiRegister, payload);
        if(response.error !== 0) {
            yield put(setErrorMessage(response.error, response.message))
        }
    } catch (error) {
        throw error
    }
}

export function* doRegister() {
    yield takeEvery(SAGA_REGISTRATION, __doRegister)
}

export default function* rootSaga() {
    yield all([
        fork(doRegister)
    ])
}