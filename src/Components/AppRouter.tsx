import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Platforms from '../Pages/Platforms';
import PageOfGames from '../Pages/PageOfGames';
import GamesByPlatform from '../Pages/GamesByPlatform';
import Game from './Games/Game';
import SingleGame from './Games/SingleGame';

const AppRouter = () => {

    return (
        <Switch>
            <Route exact path={'/platforms'}>
                <Platforms/>
            </Route>
            <Route exact path={'/games'}>
                <PageOfGames/>
            </Route>
            <Route exact path={'/games/:id'}>
                <GamesByPlatform/>
            </Route>
            <Route exact path={'/game/:id'}>
                <SingleGame/>
            </Route>
        </Switch>
    );
};

export default AppRouter;