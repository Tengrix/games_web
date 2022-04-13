import React from 'react';
import {gameType} from '../../types/types';
import s from './GameStyle.module.css'

interface GameType {
    game: gameType
}

const Game = ({game}: GameType) => {
    return (
        <div className={s.game}>
            <div className={s.gameCard}>
                <img className={s.gameImg} src={game.background_image} alt="pic"/>
                <div>
                    {game.name}
                </div>
                <div>
                    {game.rating}
                </div>
                <div>
                    {game.rating_top}
                </div>
            </div>
        </div>
    );
};

export default Game;