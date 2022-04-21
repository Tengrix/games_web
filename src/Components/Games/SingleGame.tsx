import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchSingleGame} from '../../store/reducers/gamesReudcer';
import {Link, useParams} from 'react-router-dom';
import {UseTypedSelector} from '../../hooks/useTypedSelector';
import s from './SingleGame.module.css'
import {parentPlatformType} from '../../types/types';
import {date} from '../../utils/dates';

const SingleGame = () => {
    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()
    const {singleGame} = UseTypedSelector(state => state.games)
    const {isLoading} = UseTypedSelector(state => state.app)
    useEffect(() => {
        dispatch(fetchSingleGame(+id))
    }, [])
    return (
        <div className={s.singleGameBlock}>
            {isLoading ? <h1>LOADING...</h1> :
                <>
                    <div>
                        <li>
                            <Link to={'/games'}>GAMES</Link> /
                            <span> {singleGame.name} </span>
                        </li>
                    </div>
                    <div className={s.infoBlock}>
                        <div>
                            <div>
                                {singleGame.released}
                                {/*{date(singleGame.released)}*/}
                                {singleGame.parent_platforms && singleGame.parent_platforms.map((el:parentPlatformType) => el.platform.name)}
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div><img className={s.img} src={singleGame.background_image} alt=""/></div>
                        </div>
                    </div>
                </>}
        </div>
    );
};

export default SingleGame;