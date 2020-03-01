import { all, fork, takeEvery, select, put, delay, call } from 'redux-saga/effects'
import { SAGA_REGISTRATION } from '../constant/Registration'
import { showLoginButtonRegistration } from '../actions/Registration'
import AuthApi from '../api/AuthApi'

const apiRegister = payload => AuthApi.register({payload}).then(resp => resp).catch(err => err);

function* __doRegister() {
    try {
        const payload = yield select( state => state.Registration )
        payload.dob = `${payload.dob.year}-${payload.dob.month}-${payload.dob.day}`
        yield put(showLoginButtonRegistration())
        const response = yield call(apiRegister, payload);
        console.log('response', response)
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