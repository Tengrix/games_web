import React from 'react';
import ListOfGames from '../Components/Games/ListOfGames';
import Pagination from '../Components/Pagination';
import s from './PageOfGames.module.css';
import FilterComponent from '../Components/FilterComponent/FilterComponent';
import {useGetAllGamesQuery} from '../api/apiRTKQ';
import {gameType} from '../types/types';
import {fetchingParams} from '../utils/fetchingParams';
import LoadingComponent from '../Components/LoadingComponent/LoadingComponent';

const PageOfGames = () => {
    let params = fetchingParams()
    const {isLoading, data: games, isSuccess,isFetching} = useGetAllGamesQuery(params)
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
                    <div className={s.paginationBlock}>
                        <Pagination
                            siblingCount={1}
                            totalCount={games?.count as number}
                            currentPage={params.page}
                            pageSize={params.page_size}
                            portionSize={10}
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default PageOfGames;