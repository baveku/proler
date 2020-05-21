import { createSlice, createReducer } from '@reduxjs/toolkit';
import { loginAction } from './action';

const authInitial: IAuthState = {
    token: '',
};

const authReducer = createReducer(authInitial, (builder) => {
    builder.addCase(loginAction, (state, action) => {});
});

export { authReducer };
