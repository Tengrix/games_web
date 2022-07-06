import React from 'react';
import ListOfGames from '../Components/Games/ListOfGames';
import Pagination from '../Components/Pagination';
import FilterComponent from '../Components/FilterComponent/FilterComponent';
import {useGetAllGamesQuery} from '../api/apiRTKQ';
import {gameType} from '../types/types';
import {useFetchingParams} from '../hooks/useFetchingParams';
import LoadingComponent from '../Components/LoadingComponent/LoadingComponent';

const PageOfGames = () => {
    let params = useFetchingParams()
    const {data: games, isFetching, isLoading} = useGetAllGamesQuery(params,{
        pollingInterval:30000
    })
    return (
        <div>
            {isLoading ?
                <LoadingComponent/>
                :
                <div>
                    <FilterComponent/>
                    <ListOfGames
                        isFetching={isFetching}
                        games={games?.results as gameType[]}
                    />
                    {isFetching ?
                        '' :
                        <Pagination
                            siblingCount={1}
                            totalCount={games?.count as number}
                            currentPage={params.page}
                            pageSize={params.page_size}
                            portionSize={10}
                        />
                    }
                </div>
            }
        </div>
    );
};

export default PageOfGames;