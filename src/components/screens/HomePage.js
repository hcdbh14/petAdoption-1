import React from 'react'
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AdoptMeSection from '../layout/homePage/AdoptMeSection';
import Responsibility from '../layout/homePage/Responsibility';
import MiniSearch from '../layout/search/MiniSearch';
import HeaderImage from '../layout/header/HeaderImage';
const HomePage = () => {
    const styleColored = {
        display: 'inline-block', marginRight: '2rem'
    }
    const style = {
        display: 'inline-block'
    }

    return (

        <div className="main">
            <HeaderImage />
            <MiniSearch />
            <AdoptMeSection styleColored={styleColored} style={style} />
            <Responsibility styleColored={styleColored} style={style} />
            <PetsToAdoptSection />
        </div >

    )
}

export default HomePage
