import {PlatformFetchingTypes, PlatformTypes} from '../../types/platfomsType/platformTypes';
import {ThunkDispatch} from 'redux-thunk';
import {getAllPlatforms} from '../../api/api';
import {setIsLoading} from './appReducer';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const platformsInitialState: PlatformTypes = {
    platforms: {
        count: null,
        next: null,
        previous: null,
        results: []
    }
}
export const platformSlice = createSlice({
    name: 'platform',
    initialState: platformsInitialState,
    reducers: {
        setGamesPlatforms: (state, action: PayloadAction<{ data: PlatformFetchingTypes }>) => {
            state.platforms = action.payload.data
        }
    }
})
export const {setGamesPlatforms} = platformSlice.actions
export const platformReducer = platformSlice.reducer

export const fetchPlatforms = () => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        dispatch(setIsLoading({value: true}))
        const data = await getAllPlatforms()
        dispatch(setGamesPlatforms({data: data.data}))
        dispatch(setIsLoading({value: false}))
        console.log(data.data)
    } catch (e) {

    }
}