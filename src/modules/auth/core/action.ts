import { createAction } from '@reduxjs/toolkit';

interface LoginPayload {}
const loginAction = createAction<LoginPayload>('auth/login');

export { loginAction };
