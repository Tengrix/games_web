import React, {useEffect} from 'react';
import {UseTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchPlatforms} from "../store/reducers/platformsReducer";
import {Link} from 'react-router-dom';
import {fetchFilteredGamesByPlatform} from "../store/reducers/gamesReudcer";

const Platforms = () => {
    const dispatch = useDispatch()
    const {results} = UseTypedSelector(state => state.platforms)
    useEffect(() => {
        dispatch(fetchPlatforms())
    }, [])


    return (
        <div>
            {results.map(el =>
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