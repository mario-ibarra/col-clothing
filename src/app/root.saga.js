import { all, call } from 'redux-saga/effects'

import { categoriesSaga } from '../features/categories/categories.saga'
import { userSaga } from '../features/user/user.saga'
import { counterSaga } from '../features/counter/counterSaga'

export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSaga), call(counterSaga)])
}