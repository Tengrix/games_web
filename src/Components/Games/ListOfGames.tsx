import React from 'react';
import {gameType} from '../../types/types';
import Game from './Game';
import s from './ListOfGamesStyle.module.scss'
import LoadingComponent from '../LoadingComponent/LoadingComponent';

interface GamesType {
    games: gameType[];
    isFetching: boolean;
}

const ListOfGames = ({games, isFetching}: GamesType) => {
    return (
        <div className={s.mainBlock}>
            {isFetching
                ?
                <div className={s.loadingBlock}>
                    <LoadingComponent/>
                </div>
                :
                games.map(el =>
                    <Game
                        game={el}
                        key={el.id}
                    />
                )

            }
        </div>
    );
};

export default ListOfGames;