import React from 'react';
import {Link} from 'react-router-dom';
import s from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={s.navbarBlock}>
            <Link to={'/games'}>
                Games
            </Link>
            <div>
                <Link to={'/platforms'}>
                    Platforms
                </Link>
            </div>
        </div>
    );
};

export default Navbar;