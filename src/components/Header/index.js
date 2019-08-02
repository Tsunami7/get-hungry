import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Get Hungry</h1>
            <div className="search-about">
                <Link to="/"><h2 className="search">Search Recipe</h2></Link>
                <Link to="/About/"><h2 className="about">About API</h2></Link>
            </div>
        </header>
    )
}

export default Header