import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
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