import React, { useEffect } from 'react';
import Shelters from '../layout/homePage/Shelters';
import Responsibility from '../layout/homePage/Responsibility';
import MiniSearch from '../layout/search/MiniSearch';
import SpotLight from '../layout/spotLight/SpotLight';
import HeaderImage from '../layout/header/HeaderImage';
const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="main">
            <HeaderImage />
            <MiniSearch />
            <SpotLight />
            <Responsibility />
            <Shelters />
        </div >

    )
}

export default HomePage
