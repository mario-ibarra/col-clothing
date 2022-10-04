import { all, put, takeEvery, call } from 'redux-saga/effects'
import { increment, onIncrementAsync } from './counterSlice';

const delay = (ms) => new Promise(res => setTimeout((res, ms) => {
    
}, 1000))

// export function* helloSaga(){
//     console.log('Hello Sagas!')
// }

// export function* incrementAsync() {
//     yield delay(1000)
//     yield put(increment.type)
// }

// export function* watchIncrementAsync() {
//     yield takeEvery(onIncrementAsync.toString(), incrementAsync)
// }


export function* counterSaga(){
    yield all([
        // helloSaga(),
        // watchIncrementAsync()
    ])
}