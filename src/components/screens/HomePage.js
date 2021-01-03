import React from 'react'
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
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
            <PetsToAdoptSection />
            <AdoptMeSection />

        </div >

    )
}

export default HomePage
