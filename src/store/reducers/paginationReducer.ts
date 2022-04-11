import {InferActionsType} from "./index";

type paginationInitialStateType = {
    currentPage:number;
    pageSize:number;
}
const initialState:paginationInitialStateType = {
    currentPage:1,
    pageSize:20
}
export const paginationReducer = (state=initialState,action:ActionTypes) => {
    switch(action.type){
        case "SET_PAGE":
            return {...state, currentPage:action.page}
        case "SET_PAGE_SIZE":
            return {...state, pageSize:action.pageSize}
        default:
            return state
    }
}
type ActionTypes = InferActionsType<typeof paginationActions>
export const paginationActions = {
    setCurrentPage:(page:number)=>{
        return{
            type:'SET_PAGE',
            page
        } as const
    },
    setPageSize:(pageSize:number)=>{
        return{
            type:'SET_PAGE_SIZE',
            pageSize
        } as const
    }
}