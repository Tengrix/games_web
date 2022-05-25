import React, {useEffect} from 'react';
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
    const dispatch = useDispatch()
    const {isLoading, data: games} = useGetAllGamesQuery(params)
    useEffect(() => {
        return () => {
            dispatch(setCurrentPage({page: 1}))
        }
    }, [])
    return (
        <div>

            {isLoading ? <h1 data-testid={'data_testId'}>LOADING...</h1> :
                <div>
                    <FilterComponent/>
                    <ListOfGames
                        games={games?.results as gameType[]}
                    />
                    <div className={s.paginationBlock}>
                        <Pagination
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