import React from 'react';
import {Route, Switch} from "react-router-dom";
import Platforms from "../Pages/Platforms";
import PageOfGames from "../Pages/PageOfGames";
import GamesByPlatform from "../Pages/GamesByPlatform";

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
        </Switch>
    );
};

export default AppRouter;