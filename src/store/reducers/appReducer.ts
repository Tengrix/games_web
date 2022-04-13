import {InferActionsType} from './index';

interface appInitialStateType{
    isLoading:boolean;
    error:string;
}
const appInitialState:appInitialStateType = {
    isLoading:false,
    error:''
}
export const appReducer = (state=appInitialState, action:appReducerActionsType) =>{
    switch (action.type) {
        case 'IS_LOADING':
            return {...state, isLoading:action.value}
        default:
            return state
    }
}
type appReducerActionsType = InferActionsType<typeof appReducerActions>
export const appReducerActions = {
    setIsLoading:(value:boolean)=>{
        return{
            type:'IS_LOADING',
            value
        } as const
    }
}