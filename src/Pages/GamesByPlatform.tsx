import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Game from '../Components/Games/Game';
import {fetchingParamsType, useGetGamesByPlatformQuery} from '../api/apiRTKQ';
import s from './GamesByPlatform.module.css'
import Pagination from '../Components/Pagination';
import {UseTypedSelector} from '../hooks/useTypedSelector';
import {setCurrentPage} from '../store/reducers/paginationReducer';
import {useDispatch} from 'react-redux';
import LoadingComponent from '../Components/LoadingComponent/LoadingComponent';

const GamesByPlatform = () => {
    const dispatch = useDispatch()
    const {currentPage, pageSize} = UseTypedSelector(state => state.pagination)
    const {id} = useParams<{ id: string }>()
    let params: fetchingParamsType = {
        page: currentPage,
        platformId: +id
    }
    const {isLoading, data: filteredGames, isError} = useGetGamesByPlatformQuery(params)
    useEffect(() => {
        return () => {
            dispatch(setCurrentPage({page: 1}))
        }
    }, [])
    return (
        <div>
            <div className={s.mainBlock}>
                {isError && 'Не найдена страница...'}
                {isLoading ? <LoadingComponent/> :
                    filteredGames?.results.map(el =>
                        <Game
                            key={el.id}
                            game={el}
                        />
                    )}
            </div>
            <Pagination
                totalCount={filteredGames?.count as number}
                currentPage={params.page}
                pageSize={pageSize}
                portionSize={10}
                siblingCount={1}
            />

        </div>
    );
};

export default GamesByPlatform;