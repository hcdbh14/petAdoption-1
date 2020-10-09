import React from 'react'
import Intro from '../layout/homePage/Intro';
import SearchSection from '../layout/homePage/SearchSection';
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AboutSection from '../layout/homePage/AboutSection';
const HomePage = () => {

    return (
        <div>
            {/* <h1>Homepage</h1> */}
            {/* <SearchSection /> */}
            <Intro />
            <PetsToAdoptSection />
            <AboutSection />
        </div>
    )
}

export default HomePage
