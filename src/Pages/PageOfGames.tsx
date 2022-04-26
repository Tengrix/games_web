import React from 'react';
import ListOfGames from '../Components/Games/ListOfGames';
import Pagination from '../Components/Pagination';
import {setCurrentPage} from '../store/reducers/paginationReducer';
import {useDispatch} from 'react-redux';
import s from './PageOfGames.module.css';
import FilterComponent from '../Components/FilterComponent/FilterComponent';
import {useGetAllGamesQuery} from '../api/apiRTKQ';
import {gameType} from '../types/types';
import {fetchingParams} from '../utils/fetchingParams';

const PageOfGames = () => {
    let params = fetchingParams()
    const {isLoading, data:games} = useGetAllGamesQuery(params)
    const dispatch = useDispatch()
    const onPageChangeHandler = (page: number) => {
        dispatch(setCurrentPage({page}))
    }

    return (
        <div className={s.gamesPageBlock}>

            {isLoading ? <h1 data-testid={'data_testId'}>LOADING...</h1> :
                <div>
                    <FilterComponent/>
                    <ListOfGames
                        games={games?.results as gameType[]}
                    />
                    <Pagination
                        totalCount={games?.count as number}
                        currentPage={params.page}
                        pageSize={params.page_size}
                        onPageChange={onPageChangeHandler}
                        portionSize={10}
                    />
                </div>
            }
        </div>
    );
};

export default PageOfGames;