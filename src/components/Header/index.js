import React from 'react';
import './Header.css'
import {Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Get Hungry</h1>
            <Link to="/">Search</Link>
            <Link to="/About/">About API</Link>
        </header>
    )
}

export default Header