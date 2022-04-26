import React from 'react';
import {useParams} from 'react-router-dom';
import Game from '../Components/Games/Game';
import {useGetGamesByPlatformQuery} from '../api/apiRTKQ';

const GamesByPlatform = () => {
    const {id} = useParams<{ id: string }>()
    const {isLoading, data:filteredGames} = useGetGamesByPlatformQuery(+id)
    return (
        <div >
            {isLoading ? <h1>LOADING...</h1> :
            filteredGames?.results.map(el =>
                    <Game
                        key={el.id}
                        game={el}
                    />
                )}

        </div>
    );
};

export default GamesByPlatform;