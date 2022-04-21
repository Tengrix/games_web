import {gamesReducerType, gameType, mainType, SortingType} from '../../types/types';
import {getALlGames, getGamesByPlatform, getSearchedGames, getSingleGame} from '../../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {setIsLoading} from './appReducer';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const gamesInitialState: mainType = {
    games: {
        'count': null,
        'next': null,
        'previous': null,
        'results': [],
        'seo_title': null,
        'seo_description': null,
        'seo_keywords': null,
        'seo_h1': null,
        'noindex': false,
        'nofollow': false,
        'description': null,
        'filters': {
            'years': []
        },
        'nofollow_collections': [
            'stores'
        ],
    },
    filteredGames: [],
    searchedGames: [],
    singleGame: {} as gameType
}
export const gamesSlice = createSlice({
    name: 'games',
    initialState: gamesInitialState,
    reducers: {
        setGames: (state, action: PayloadAction<{ data: gamesReducerType }>) => {
            state.games = action.payload.data
        },
        setFilteredGamesByPlatform: (state, action: PayloadAction<{ data: gameType[] }>) => {
            state.filteredGames = action.payload.data
        },
        setSearchedGames: (state, action: PayloadAction<{ data: gameType[] }>) => {
            state.searchedGames = action.payload.data
        },
        setSingleGame: (state, action: PayloadAction<{ game: gameType }>) => {
            state.singleGame = action.payload.game
        }
    }
})
export const {setFilteredGamesByPlatform, setSearchedGames, setSingleGame, setGames} = gamesSlice.actions
export const gamesReducer = gamesSlice.reducer
export const fetchGames = (pageSize: number, currentPage: number, title: string, ordering: SortingType) => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        dispatch(setIsLoading({value: true}))
        const data = await getALlGames(pageSize, currentPage, title, ordering)
        dispatch(setGames({data: data.data}))
        dispatch(setIsLoading({value: false}))

    } catch (e) {

    }
}
export const fetchFilteredGamesByPlatform = (id: number) => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        dispatch(setIsLoading({value: true}))
        const data = await getGamesByPlatform(id)
        dispatch(setFilteredGamesByPlatform({data: data.data.results}))
        dispatch(setIsLoading({value: false}))
    } catch (e) {

    }
}
export const fetchSearchedGamesByTitle = (title: string) => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        const data = await getSearchedGames(title)
        dispatch(setSearchedGames({data: data.data.results}))
    } catch (e) {

    }
}
export const fetchSingleGame = (id: number) => async (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(setIsLoading({value: true}))
    try {
        const data = await getSingleGame(id)
        dispatch(setSingleGame({game: data.data}))
        console.log(data.data)
    } catch (e) {

    } finally {
        dispatch(setIsLoading({value: false}))
    }
}