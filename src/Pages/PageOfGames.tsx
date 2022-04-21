import React, {useEffect} from 'react';
import ListOfGames from '../Components/Games/ListOfGames';
import Pagination from '../Components/Pagination';
import {UseTypedSelector} from '../hooks/useTypedSelector';
import {setCurrentPage} from '../store/reducers/paginationReducer';
import {useDispatch} from 'react-redux';
import {fetchGames} from '../store/reducers/gamesReudcer';
import s from './PageOfGames.module.css';
import FilterComponent from '../Components/FilterComponent/FilterComponent';

const PageOfGames = () => {
    const {results, count} = UseTypedSelector(state => state.games.games)
    const {pageSize, currentPage} = UseTypedSelector(state => state.pagination)
    const {isLoading, error} = UseTypedSelector(state => state.app)
    const dispatch = useDispatch()
    const {searchingTitle, sort} = UseTypedSelector(state => state.filter)
    useEffect(() => {
        dispatch(fetchGames(pageSize, currentPage, searchingTitle, sort))
    }, [currentPage, sort])
    const onPageChangeHandler = (page: number) => {
        dispatch(setCurrentPage({page}))
    }

    return (
        <div className={s.gamesPageBlock}>

            {isLoading ? <h1 data-testid={'data_testId'}>LOADING...</h1> :
                <div>
                    <FilterComponent/>
                    <ListOfGames
                        games={results}
                    />
                    <Pagination
                        totalCount={count}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={onPageChangeHandler}
                        portionSize={10}
                    />
                </div>
            }
        </div>
    );
};

export default PageOfGames;