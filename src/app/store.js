import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import  counterReducer  from '../features/counter/counterSlice';
import userReducer  from '../features/user/userSlice';
import categoryReducer from '../features/categories/categorySlice'
import cartReducer  from '../features/cart/cartSlice';
import { persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from '@redux-saga/core';


import { rootSaga } from './root.saga';

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware,
].filter(Boolean)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});
sagaMiddleware.run(rootSaga);

