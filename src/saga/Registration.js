import { all, fork, takeEvery, select, put, delay, call } from 'redux-saga/effects'
import { SAGA_REGISTRATION } from '../constant/Registration'
import { showLoginButtonRegistration, setSuccessRegistration } from '../actions/Registration'
import { setErrorMessage } from '../actions/ErrorHandling'
import AuthApi from '../api/AuthApi'
import { push } from 'connected-react-router'

const apiRegister = payload => AuthApi.register({payload}).then(resp => resp).catch(err => err);

/**
 * Register Button Task Runner
 */
export function* __doRegister() {
    try {
        const payload = yield select( state => state.Registration )
        payload.dob = `${payload.dob.year}-${payload.dob.month}-${payload.dob.day}`
        const response = yield call(apiRegister, payload);
        if(response.error !== 0) {
            yield put(setErrorMessage(response.error, response.message))
        } else {
            yield put(showLoginButtonRegistration())
            yield put(setSuccessRegistration())
        }
        yield put(push('/login'))
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