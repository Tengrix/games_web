import React from 'react';
import {Link} from 'react-router-dom';
import {useGetAllPlatformsQuery} from '../api/apiRTKQ';
import s from './Platforms.module.css'

const Platforms = () => {
    const {data:platforms,isLoading,error} = useGetAllPlatformsQuery()
    return (
        <div className={s.platformsBlock}>
            {error && 'Please try again...'}
            {isLoading ? <h1 data-testid={'platformLoading_testId'}>LOADING...</h1> :
                platforms?.results.length && platforms.results.map(el =>
                    <div key={el.id}>
                        <Link to={`/games/${el.id}`}>
                            {el.name}
                        </Link>
                    </div>
                )}
        </div>
    );
};

export default Platforms;