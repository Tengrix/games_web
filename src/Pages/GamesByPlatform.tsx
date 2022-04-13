import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchFilteredGamesByPlatform} from '../store/reducers/gamesReudcer';
import {useParams} from 'react-router-dom';
import Game from '../Components/Games/Game';
import {UseTypedSelector} from '../hooks/useTypedSelector';

const GamesByPlatform = () => {
    const dispatch = useDispatch()
    const {filteredGames} = UseTypedSelector(state => state.games)
    const {isLoading, error} = UseTypedSelector(state => state.app)
    const {id} = useParams<{ id: string }>()
    useEffect(() => {
        dispatch(fetchFilteredGamesByPlatform(+id))
    }, [id])
    return (
        <div>
            {isLoading ? <h1>LOADING</h1> :
                filteredGames.map(el =>
                    <Game
                        key={el.id}
                        game={el}
                    />
                )}

        </div>
    );
};

export default GamesByPlatform;