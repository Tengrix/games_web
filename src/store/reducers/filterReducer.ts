import {InferActionsType} from './index';
import {SortingType} from '../../types/types';

interface filterReducerType{
    searchingTitle:string;
    sort:SortingType
}
const filterInitialState:filterReducerType = {
    searchingTitle:'',
    sort:'-rating'
}
export const filterReducer = (state=filterInitialState, action:filterReducerActionsType) => {
    switch (action.type) {
        case "SET_TITLE":
            return {...state, searchingTitle: action.title}
        case 'SET_SORTED_GAMES':
            return {...state, sort:action.sort}
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
    },
    setSortedGames: (sort:SortingType)=>{
        return{
            type:'SET_SORTED_GAMES',
            sort
        } as const
    }

}