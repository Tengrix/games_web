import {gamesReducerType, gameType, mainType, SortingType} from '../../types/types';
import {InferActionsType} from './index';
import {getALlGames, getGamesByPlatform} from '../../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {appReducerActions} from './appReducer';

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
    filteredGames: []
}
export const gamesReducer = (state = gamesInitialState, action: gamesAppType) => {
    switch (action.type) {
        case 'SET_GAMES':
            return {...state, games: action.games}
        case 'SET_FILTERED_GAMES':
            return {...state, filteredGames: action.games}
        default:
            return state
    }
}
export type gamesAppType = InferActionsType<typeof gamesApp>

export const gamesApp = {
    setGames: (games: gamesReducerType) => {
        return {
            type: 'SET_GAMES',
            games
        } as const
    },
    setFilteredGames: (games: gameType[]) => {
        return {
            type: 'SET_FILTERED_GAMES',
            games
        } as const
    }
}
export const fetchGames = (pageSize: number, currentPage: number, title: string, ordering: SortingType) => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        dispatch(appReducerActions.setIsLoading(true))
        const data = await getALlGames(pageSize, currentPage, title, ordering)
        dispatch(gamesApp.setGames(data.data))
        dispatch(appReducerActions.setIsLoading(false))

    } catch (e) {

    }
}
export const fetchFilteredGamesByPlatform = (id: number) => async (dispatch: ThunkDispatch<any, any, any>) => {
    try {
        dispatch(appReducerActions.setIsLoading(true))
        const data = await getGamesByPlatform(id)
        dispatch(gamesApp.setFilteredGames(data.data.results))
        dispatch(appReducerActions.setIsLoading(false))
    } catch (e) {

    }
}