import React from 'react';
import {gameType} from '../../types/types';
import s from './GameStyle.module.css'

interface GameType {
    game: gameType
}

const Game = ({game}: GameType) => {
    return (
        <div data-testid={'data_testId'} className={s.game}>
            <div className={s.gameCard}>
                <img className={s.gameImg} src={game.background_image} alt="pic"/>
            </div>
            <div className={s.gameInfo}>
                <div>
                    {game.name}
                </div>
            </div>
        </div>
    );
};

export default Game;