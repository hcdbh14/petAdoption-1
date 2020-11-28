import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import HeaderImage from './HeaderImage';
import HeaderToggle from './HeaderToggle';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const Header = () => {
    const [scrollHieght, setscrollHieght] = useState({ navOnTop: false })
    useEffect(() => {
        window.addEventListener('scroll', makeSticky);
        return () => {
            window.removeEventListener('scroll', makeSticky);
        }
    }, [scrollHieght])
    const makeSticky = (e) => {
        let element = e.target.scrollingElement
        let position = element.getBoundingClientRect();
        let imageHeight = window.screen.width * 0.34;
        if (-position.top <= imageHeight) //check if scroll height equal to image height
            setscrollHieght({ navOnTop: false })
        else
            setscrollHieght({ navOnTop: true })
    }

    const stickyStyleContainer = {
        position: "fixed",
        width: "100vw",
        zIndex: '99999'
    }

    // const stickyPadding = { paddingBottom: '14rem' }
    return (
        <div className="header" >

            <img src={require('../../../images/footer-background-with-icon.png')} alt="logo" className="header__mobileLogo" />

            <HeaderImage />
            <div className="header__nav__container">
                <Navigation />
                <Link to={ROUTES.HOME} className="navigation__link">
                    <img src={require('../../../images/logo.png')} alt="Logo" className="header__nav__logo" />
                </Link>
            </div>
            <HeaderToggle />
        </div>
    )
}

export default Header
