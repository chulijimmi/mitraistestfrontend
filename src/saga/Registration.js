import { all, fork, takeEvery, select } from 'redux-saga/effects'
import { SAGA_REGISTRATION } from '../constant/Registration'

function* __doRegister() {
    const payload = yield select( state => state.Registration )
    payload.dob = `${payload.dob.year}-${payload.dob.month}-${payload.dob.day}`
    console.log('__doRegister', payload)
}

export function* doRegister() {
    yield takeEvery(SAGA_REGISTRATION, __doRegister)
}

export default function* rootSaga() {
    yield all([
        fork(doRegister)
    ])
}