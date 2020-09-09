import React from 'react'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Navigation />
            <Link to='/home'>
                <h2>pet-adoption</h2>
            </Link>
        </div>
    )
}

export default Header
