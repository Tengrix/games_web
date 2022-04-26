import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PlatformFetchingTypes} from '../types/platfomsType/platformTypes';
import {gamesReducerType, gameType, IfetchingParamsType} from '../types/types';

export const gamesAPI = createApi({
    reducerPath:'gamesAPI',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.rawg.io/api/'}),
    endpoints:(builder)=>({
        getAllPlatforms:builder.query<PlatformFetchingTypes,any>({
            query:()=> `platforms?key=34f4bc399f394d87a8595769b1ef97ee`
        }),
        getAllGames:builder.query<gamesReducerType,IfetchingParamsType>({
            query: (payload)=>`games?ordering=${payload.ordering}&page_size=${payload.page_size}&page=${payload.page}&search=${payload.title}&key=34f4bc399f394d87a8595769b1ef97ee`
        }),
        getSingleGame:builder.query<gameType,number>({
            query:(id)=>`games/${id}?key=34f4bc399f394d87a8595769b1ef97ee`
        }),
        getGamesByTitle:builder.query<gameType[], string>({
            query:(title)=>`games?key=34f4bc399f394d87a8595769b1ef97ee&search=${title}`
        }),
        getGamesByPlatform:builder.query<gamesReducerType,number>({
            query:(platformId:number)=>`games?key=34f4bc399f394d87a8595769b1ef97ee&platforms=${platformId}`
        })
    })

})
export const {
    useGetAllPlatformsQuery,
    useGetAllGamesQuery,
    useGetSingleGameQuery,
    useGetGamesByTitleQuery,
    useGetGamesByPlatformQuery
} = gamesAPI