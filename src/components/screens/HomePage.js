import React from 'react'
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AdoptMeSection from '../layout/homePage/AdoptMeSection';
import Responsibility from '../layout/homePage/Responsibility';
import MiniSearch from '../layout/search/MiniSearch';
import HeaderImage from '../layout/header/HeaderImage';
const HomePage = () => {
    const styleColored = {
        display: 'inline-block', marginRight: '1rem'
    }
    const style = {
        display: 'inline-block'
    }

    return (

        <div className="main">
            <HeaderImage />
            <MiniSearch />
            <Responsibility styleColored={styleColored} style={style} />
            <PetsToAdoptSection />
            <AdoptMeSection styleColored={styleColored} style={style} />

        </div >

    )
}

export default HomePage
