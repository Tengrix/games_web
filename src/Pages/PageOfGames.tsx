import React, {ChangeEvent, useEffect} from 'react';
import ListOfGames from "../Components/Games/ListOfGames";
import Pagination from "../Components/Pagination";
import {UseTypedSelector} from "../hooks/useTypedSelector";
import {paginationActions} from "../store/reducers/paginationReducer";
import {useDispatch} from "react-redux";
import {fetchGames} from "../store/reducers/gamesReudcer";
import {filterReducerActions} from "../store/reducers/filterReducer";

const PageOfGames = () => {
    const {results,count} = UseTypedSelector(state => state.games.games)
    const {pageSize,currentPage} = UseTypedSelector(state => state.pagination)
    const dispatch = useDispatch()
    const {searchingTitle} = UseTypedSelector(state => state.filter)

    useEffect(() => {
        dispatch(fetchGames(pageSize,currentPage,searchingTitle))
    }, [currentPage,searchingTitle])
    const onPageChangeHandler = (page:number) => {
        dispatch(paginationActions.setCurrentPage(page))
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(filterReducerActions.setSearchingTitle(e.target.value))
    }
    return (
        <div>
            <label htmlFor="search">Search</label>
            <input data-testid='data_testId' type="text" name={'search'} onChange={onChangeHandler}/>
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
    );
};

export default PageOfGames;