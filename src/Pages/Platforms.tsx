import React, {useEffect} from 'react';
import {UseTypedSelector} from '../hooks/useTypedSelector';
import {useDispatch} from 'react-redux';
import {fetchPlatforms} from '../store/reducers/platformsReducer';
import {Link} from 'react-router-dom';

const Platforms = () => {
    const dispatch = useDispatch()
    const {platforms} = UseTypedSelector(state => state.platforms)
    const {isLoading, error} = UseTypedSelector(state => state.app)
    useEffect(() => {
        dispatch(fetchPlatforms())
    }, [])
    return (
        <div>
            {isLoading ? <h1 data-testid={'platformLoading_testId'}>LOADING...</h1> :
                platforms.results.length && platforms.results.map(el =>
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