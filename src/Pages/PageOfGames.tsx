import React, {ChangeEvent, useEffect} from 'react';
import ListOfGames from '../Components/Games/ListOfGames';
import Pagination from '../Components/Pagination';
import {UseTypedSelector} from '../hooks/useTypedSelector';
import {paginationActions} from '../store/reducers/paginationReducer';
import {useDispatch} from 'react-redux';
import {fetchGames} from '../store/reducers/gamesReudcer';
import {filterReducerActions} from '../store/reducers/filterReducer';
import {SortingType} from '../types/types';
import s from './PageOfGames.module.css';
import Platforms from './Platforms';

const PageOfGames = () => {
    const {results, count} = UseTypedSelector(state => state.games.games)
    const {pageSize, currentPage} = UseTypedSelector(state => state.pagination)
    const {isLoading, error} = UseTypedSelector(state => state.app)
    const dispatch = useDispatch()
    const {searchingTitle, sort} = UseTypedSelector(state => state.filter)

    useEffect(() => {
        dispatch(fetchGames(pageSize, currentPage, searchingTitle, sort))
    }, [currentPage, searchingTitle, sort])
    const onPageChangeHandler = (page: number) => {
        dispatch(paginationActions.setCurrentPage(page))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(filterReducerActions.setSearchingTitle(e.target.value))
    }
    const onSortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(filterReducerActions.setSortedGames(e.target.value as SortingType))
    }
    return (
        <div className={s.gamesPageBlock}>
            <div>
                <h1>PLATFORMS</h1>
                <Platforms/>
            </div>
            {isLoading ? <h1>LOADING...</h1> :
                <div>
                    <div className={s.filterBlock}>
                        <input
                            placeholder={'Search...'}
                            className={s.searchBlock}
                            data-testid="data_testId"
                            type="text"
                            name={'search'}
                            onChange={onChangeHandler}
                        />
                        <select className={s.selectBlock} value={sort} onChange={onSortHandler} name="" id="">
                            <option value="-released">New</option>
                            <option value="released">Old</option>
                            <option value="-rating">Top-rating</option>
                            <option value="rating">Low-rating</option>
                        </select>
                    </div>
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