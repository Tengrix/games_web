import React from 'react';
import {gameType} from '../../types/types';
import s from './GameStyle.module.css'
import noPic from '../../assets/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'

interface GameType {
    game: gameType;
}

const Game = ({game}: GameType) => {

    return (
        <div data-testid={'data_testId'} className={s.game}>
            <img className={s.gameImg} src={game.background_image === null ? noPic : game.background_image} alt="pic"/>
            <span className={s.gameInfo}>
                {game.name}
            </span>
        </div>
    );
};

export default Game;