import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'modules/auth/core';
import { productsSlice } from 'modules/products/core';
export const rootReducer = combineReducers({
    auth: authReducer,
    products: productsSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
