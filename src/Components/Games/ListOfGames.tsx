import React from 'react';
import {gameType} from "../../types/types";
import Game from "./Game";
interface GamesType {
    games:gameType[]
}
const ListOfGames = ({games}:GamesType) => {
    return (
        <div>
            {games.map(el=>
                <Game
                    game={el}
                    key={el.id}
                />
            )}
        </div>
    );
};

export default ListOfGames;