import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer, // CHỈ GIỮ LẠI AUTH
    },
});

export default store;