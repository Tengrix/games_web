import React from 'react';
import {gameType} from "../../types/types";
import Game from "./Game";
import s from './ListOfGamesStyle.module.css'
interface GamesType {
    games:gameType[]
}
const ListOfGames = ({games}:GamesType) => {
    return (
        <div className={s.mainBlock}>
            {games && games.map(el=>
                <Game
                    game={el}
                    key={el.id}
                />
            )}
        </div>
    );
};

export default ListOfGames;