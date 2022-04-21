import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type paginationInitialStateType = {
    currentPage: number;
    pageSize: number;
}
const initialState: paginationInitialStateType = {
    currentPage: 1,
    pageSize: 20
}
export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
            state.currentPage = action.payload.page
        },
        setPageSize: (state, action: PayloadAction<{ value: number }>) => {
            state.pageSize = action.payload.value
        }
    }
})
export const {setPageSize, setCurrentPage} = paginationSlice.actions
export const paginationReducer = paginationSlice.reducer
