import React from 'react';
import {Link, useParams} from 'react-router-dom';
import s from './SingleGame.module.css'
import {gameType, parentPlatformType} from '../../types/types';
import {date} from '../../utils/dates';
import {useGetSingleGameQuery} from '../../api/apiRTKQ';

const SingleGame = () => {
    const {id} = useParams<{ id: string }>()
    const {isLoading, data} = useGetSingleGameQuery(+id)
    const singleGame = data as gameType
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
                                {date(singleGame.released)}
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