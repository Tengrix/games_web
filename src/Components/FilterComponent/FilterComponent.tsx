import React, {ChangeEvent, useEffect} from 'react';
import s from '../../Pages/PageOfGames.module.css';
import {UseTypedSelector} from '../../hooks/useTypedSelector';
import {useDispatch} from 'react-redux';
import {fetchSearchedGamesByTitle} from '../../store/reducers/gamesReudcer';
import { Link } from 'react-router-dom';
import {setSearchingTitle, setSortedGames} from '../../store/reducers/filterReducer';
import {SortingType} from '../../types/types';

const FilterComponent = () => {
    const {searchedGames} = UseTypedSelector(state => state.games)
    const {searchingTitle, sort} = UseTypedSelector(state => state.filter)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchingTitle({title:e.target.value}))
    }
    const onSortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortedGames({value: e.target.value as SortingType}))
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSearchedGamesByTitle(searchingTitle))

    }, [searchingTitle])

    return (
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
            {searchingTitle !== '' &&
            <div className={s.autoCompleteBlock}>
                {searchedGames.map(el =>
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