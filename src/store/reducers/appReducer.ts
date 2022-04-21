import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface appInitialStateType {
    isLoading: boolean;
    error: string;
}

const appInitialState: appInitialStateType = {
    isLoading: false,
    error: ''
}
export const appSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.isLoading = action.payload.value
        }
    }
})
export const {setIsLoading} = appSlice.actions
export const appReducer = appSlice.reducer