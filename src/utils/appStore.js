import {configureStore} from '@reduxjs/toolkit';
import useReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        // here we can combine several slice reducers into one root reducer
        user : useReducer,
        movies : moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    }
});

export default appStore;