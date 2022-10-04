import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  getCategoriesSuccess,
  getCategoriesStart,
  getCategoriesFailure,
} from './categorySlice';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export function* fetchCategoriesAsync(){
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(getCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(getCategoriesFailure(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest('categories/getCategoriesStart', fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
 
}




