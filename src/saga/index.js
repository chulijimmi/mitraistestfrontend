import {all, fork} from 'redux-saga/effects'
import registration from './Registration'

export default function*(){
    yield all([
        fork(registration)
    ]);
}
