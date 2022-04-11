import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppRootReducerType} from "../store/reducers";

export const UseTypedSelector:TypedUseSelectorHook<AppRootReducerType> = useSelector