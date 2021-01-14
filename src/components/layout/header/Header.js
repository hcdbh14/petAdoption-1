import React from 'react'
import Navigation from '../Navigation'
import HeaderToggle from './HeaderToggle';
import SearchBar from '../ui/SearchBar';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <div className="header" >

            <SearchBar />
            <div className="header__nav__container">
                <Navigation />
            </div>
            <Link to="/">
                <Logo />
            </Link>
            <HeaderToggle />
        </div>
    )
}

export default Header
