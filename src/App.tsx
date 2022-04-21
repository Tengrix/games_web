import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import AppRouter from './Components/AppRouter';
import s from './Pages/PageOfGames.module.css';
import {Link} from 'react-router-dom';
import FilterComponent from './Components/FilterComponent/FilterComponent';

function App() {
    return (
        <div className={'App'}>
            <span>
                <Navbar/>
            </span>
            <AppRouter/>
        </div>

    );
}

export default App;

