import React from 'react';
import {gameType} from '../../types/types';
import s from './GameStyle.module.css'

interface GameType {
    game: gameType
}

const Game = ({game}: GameType) => {
    return (
        <div data-testid={'data_testId'} className={s.game}>
            <img className={s.gameImg} src={game.background_image} alt="pic"/>
            <span className={s.gameInfo}>
                {game.name}
            </span>
        </div>
    );
};

export default Game;