import React from 'react'
import SearchSection from '../layout/homePage/SearchSection';
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AboutSection from '../layout/homePage/AboutSection';
import AdoptMeSection from '../layout/homePage/AdoptMeSection';
import Responsibility from '../layout/homePage/Responsibility';
const HomePage = () => {
    const styleColored = {
        display: 'inline-block', color: '#5ac5d9', marginRight: '2rem'
    }
    const style = {
        display: 'inline-block'
    }

    return (

        <div className="main">
            <AdoptMeSection styleColored={styleColored} style={style} />
            <Responsibility styleColored={styleColored} style={style} />
            <SearchSection />
            <PetsToAdoptSection />

            <AboutSection />
        </div >
    )
}

export default HomePage
