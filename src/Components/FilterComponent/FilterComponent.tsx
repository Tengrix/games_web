import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {setSearchingTitle, setSortedGames} from '../../store/reducers/filterReducer';
import {SortingType} from '../../types/types';
import {useGetAllGamesQuery} from '../../api/apiRTKQ';
import {useFetchingParams} from '../../hooks/useFetchingParams';
import {setPageSize} from '../../store/reducers/paginationReducer';
import s from './Filter.module.scss'
import {useDebounce} from '../../hooks/useDebounce';
import {UseTypedSelector} from '../../hooks/useTypedSelector';

const FilterComponent = () => {

    const dispatch = useDispatch()
    let params = useFetchingParams()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchingTitle({title: e.currentTarget.value}))
    }
    const onSortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortedGames({value: e.target.value as SortingType}))
    }
    const onChangePageSize = (e:ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageSize({value:+e.target.value}))
    }
    useEffect(()=>{
        return ()=> {
            dispatch(setSearchingTitle({title: ''}))
        }
    },[])
    const {data: games} = useGetAllGamesQuery(params)
    return (
        <div className={s.filterBlock}>
            <input
                autoComplete={'off'}
                placeholder={'Search...'}
                className={s.searchBlock}
                data-testid="data_testId"
                type="text"
                name={'search'}
                onChange={onChangeHandler}
            />
            <select className={s.selectBlock} value={params.ordering} onChange={onSortHandler} >
                <option value="-rating">Ordered by: Top-rating </option>
                <option value="-released">New</option>
                <option value="released">Old</option>
                <option value="-rating">Top-rating</option>
                <option value="rating">Low-rating</option>
            </select>
            <select value={params.page_size} className={s.pageSizeSelect} onChange={onChangePageSize}>
                <option value="20">Games in a page: 20</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            {params.title !== '' &&
            <div className={params.title? s.autoCompleteBlock:''}>
                {games?.results.map(el =>
                    <ul key={el.id}>
                        <Link to={`/game/${el.id}`}>
                                <li>{el.name}</li>
                        </Link>
                    </ul>
                )}
            </div>
            }
        </div>
    );
};

export default FilterComponent;