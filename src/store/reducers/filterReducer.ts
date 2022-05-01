import {SortingType} from '../../types/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface filterReducerType {
    searchingTitle: string;
    sort: SortingType
}

export const filterInitialState: filterReducerType = {
    searchingTitle: '',
    sort: '-rating'
}
export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setSearchingTitle: (state, action: PayloadAction<{ title: string }>) => {
            state.searchingTitle = action.payload.title
        },
        setSortedGames: (state, action: PayloadAction<{ value: SortingType }>) => {
            state.sort = action.payload.value
        }
    }
})
export const {setSearchingTitle, setSortedGames} = filterSlice.actions
export const filterReducer = filterSlice.reducer