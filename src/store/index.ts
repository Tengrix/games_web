import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {configureStore} from '@reduxjs/toolkit';
import {gamesReducer} from './reducers/gamesReudcer';
import {paginationReducer} from './reducers/paginationReducer';
import {filterReducer} from './reducers/filterReducer';
import {platformReducer, platformSlice} from './reducers/platformsReducer';
import {appReducer} from './reducers/appReducer';

export const store = configureStore({
    reducer:{
        games:gamesReducer,
        pagination:paginationReducer,
        filter:filterReducer,
        platforms:platformReducer,
        app:appReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never
export type InferActionsType<T extends {[key:string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>