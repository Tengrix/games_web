import {combineReducers} from "redux";
import {gamesReducer} from "./gamesReudcer";
import {paginationReducer} from "./paginationReducer";
import {filterReducer} from "./filterReducer";
import {PlatformsReducer} from "./platformsReducer";

export const rootReducers = combineReducers({
    games:gamesReducer,
    pagination:paginationReducer,
    filter:filterReducer,
    platforms:PlatformsReducer
})
export type AppRootReducerType = ReturnType<typeof rootReducers>
type PropertiesTypes<T> = T extends {[key:string]: infer U} ? U : never
export type InferActionsType<T extends {[key:string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>