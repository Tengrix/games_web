import React from 'react';
import './App.css';
import Navbar from "./Pages/Navbar";
import AppRouter from "./Components/AppRouter";

function App() {
    return (
        <div className={'App'}>
            <Navbar/>
            <AppRouter/>
        </div>

    );
}

export default App;

