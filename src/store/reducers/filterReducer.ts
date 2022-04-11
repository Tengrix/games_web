import {InferActionsType} from "./index";

interface filterReducerType{
    searchingTitle:string;
}
const filterInitialState:filterReducerType = {
    searchingTitle:''
}
export const filterReducer = (state=filterInitialState, action:filterReducerActionsType) => {
    switch (action.type) {
        case "SET_TITLE":
            return {...state, searchingTitle: action.title}
        default:
            return state
    }
}
type filterReducerActionsType = InferActionsType<typeof filterReducerActions>
export const filterReducerActions = {
    setSearchingTitle:(title:string)=>{
        return{
            type:'SET_TITLE',
            title
        } as const
    }

}