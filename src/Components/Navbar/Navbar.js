import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='header'>
                <h2>Hi!!!</h2>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/services'}>Services</Link>
                    <Link to={'/blogs'}>Blogs</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/about'}>About</Link>
                </div>
            </nav >
        </div>
    );
};

export default Navbar;