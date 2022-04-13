import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to={'/games'}>
                Games
            </Link>
        </div>
    );
};

export default Navbar;