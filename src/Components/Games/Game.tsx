import React from 'react';
import {gameType} from "../../types/types";
interface GameType{
    game:gameType
}
const Game = ({game}:GameType) => {
    return (
        <div>
            {game.name}
        </div>
    );
};

export default Game;