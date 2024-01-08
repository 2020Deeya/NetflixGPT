import {configureStore} from '@reduxjs/toolkit';
import useReducer from './userSlice';

const appStore = configureStore({
    reducer: {
        // here we can combine several slice reducers into one root reducer
        user : useReducer
    }
});

export default appStore;