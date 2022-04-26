import React, {useState} from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import AppRouter from './Components/AppRouter';

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

