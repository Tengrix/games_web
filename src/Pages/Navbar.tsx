import React from 'react';
import {Link} from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbarBlock}>
            <Link to={'/games'}>
                Games
            </Link>
            <Link to={'/platforms'}>
                Platforms
            </Link>
        </div>
    );
};

export default Navbar;