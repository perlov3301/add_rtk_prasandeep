import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/index' ;
//creates a store with counterReducer as the main reducer
const store = configureStore({
    reducer: counterReducer,
});

export default store;