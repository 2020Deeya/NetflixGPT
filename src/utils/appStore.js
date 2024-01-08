import {configureStore} from '@reduxjs/toolkit';
import useReducer from './userSlice';
import moviesSlice from './moviesSlice';

const appStore = configureStore({
    reducer: {
        // here we can combine several slice reducers into one root reducer
        user : useReducer,
        movies : moviesSlice,
    }
});

export default appStore;