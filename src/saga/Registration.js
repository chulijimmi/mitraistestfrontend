import { all, fork, takeEvery, select, put, call } from 'redux-saga/effects'
import { SAGA_REGISTRATION } from '../constant/Registration'
import { showLoginButtonRegistration, setSuccessRegistration, setIsFetchingApi } from '../actions/Registration'
import { setErrorMessage, hideErrorMessage } from '../actions/ErrorHandling'
import AuthApi from '../api/AuthApi'

const apiRegister = payload => AuthApi.register({payload}).then(resp => resp).catch(err => err);

/**
 * Register Button Task Runner
 */
export function* __doRegister() {
    yield put(setIsFetchingApi(true));
    try {
        const payload = yield select( state => state.Registration )
        payload.dob = `${payload.dob.year}-${payload.dob.month}-${payload.dob.day}`
        const response = yield call(apiRegister, payload);
        if(response.error !== 0) {
            yield put(setErrorMessage(response.error, response.message))
        } else {
            yield put(setSuccessRegistration())
            yield put(hideErrorMessage())
            yield put(showLoginButtonRegistration())
        }
    } catch (error) {
        throw error
    }
    yield put(setIsFetchingApi(false))
}

export function* doRegister() {
    yield takeEvery(SAGA_REGISTRATION, __doRegister)
}

export default function* rootSaga() {
    yield all([
        fork(doRegister)
    ])
}