import React from 'react'
import AdoptMeSection from '../layout/homePage/AdoptMeSection';
import Responsibility from '../layout/homePage/Responsibility';
import MiniSearch from '../layout/search/MiniSearch';
import SpotLight from '../layout/spotLight/SpotLight';
import HeaderImage from '../layout/header/HeaderImage';
const HomePage = () => {

    return (

        <div className="main">
            <HeaderImage />
            <MiniSearch />
            <SpotLight />
            <Responsibility />
            <AdoptMeSection />
        </div >

    )
}

export default HomePage
