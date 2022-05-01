import React, {ChangeEvent, useEffect, useState} from 'react';
import s from '../../Pages/PageOfGames.module.css';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {setSearchingTitle, setSortedGames} from '../../store/reducers/filterReducer';
import {SortingType} from '../../types/types';
import {useGetAllGamesQuery} from '../../api/apiRTKQ';
import {fetchingParams} from '../../utils/fetchingParams';

const FilterComponent = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    let params = fetchingParams()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchingTitle({title: e.target.value}))
        setIsLoading(!isLoading)
    }
    const onSortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortedGames({value: e.target.value as SortingType}))
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
            <select className={s.selectBlock} value={params.ordering} onChange={onSortHandler} name="" id="">
                <option value="-released">New</option>
                <option value="released">Old</option>
                <option value="-rating">Top-rating</option>
                <option value="rating">Low-rating</option>
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