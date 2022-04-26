import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {paginationReducer} from './reducers/paginationReducer';
import {filterReducer} from './reducers/filterReducer';
import {gamesAPI} from '../api/apiRTKQ';

export const store = configureStore({
    reducer:{
        pagination:paginationReducer,
        filter:filterReducer,
        [gamesAPI.reducerPath]:gamesAPI.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gamesAPI.middleware, thunk),

})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch