import React from 'react'
import SearchSection from '../layout/homePage/SearchSection';
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AboutSection from '../layout/homePage/AboutSection';
import AdoptMeSection from '../layout/homePage/AdoptMeSection';
import Responsibility from '../layout/homePage/Responsibility';
import HeaderImage from '../layout/header/HeaderImage';
const HomePage = () => {
    const styleColored = {
        display: 'inline-block', color: '#5ac5d9', marginRight: '2rem'
    }
    const style = {
        display: 'inline-block'
    }

    return (

        <div className="main">
            <HeaderImage />
            <AdoptMeSection styleColored={styleColored} style={style} />
            <Responsibility styleColored={styleColored} style={style} />
            {/* <SearchSection /> */}
            <PetsToAdoptSection />

        </div >

    )
}

export default HomePage
