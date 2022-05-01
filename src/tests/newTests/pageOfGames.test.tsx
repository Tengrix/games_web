import * as hooks from '../../api/apiRTKQ'
import {gamesReducerType, gameType} from '../../types/types';
import {configureStore} from '@reduxjs/toolkit';
import createMockStore from 'redux-mock-store'
import {gamesAPI} from '../../api/apiRTKQ';
import thunk from 'redux-thunk';

const initialState:gamesReducerType = {
    results:[],
    count:0,
    description:'',
    next: '',
    previous: null,
    seo_title:null,
    seo_description:null,
    seo_keywords:null,
    seo_h1:null,
    noindex:false,
    nofollow: false,
    filters: {
        years: []
    },
    nofollow_collections: []
}
// const middlewares = configureStore({
//     reducer:
//     middleware:(getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(gamesAPI.middleware, thunk),
// })
// const mockStore = createMockStore(middlewares)
// const store = mockStore(initialState)