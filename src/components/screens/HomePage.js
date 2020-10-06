import React from 'react'
import SearchSection from '../layout/homePage/SearchSection';
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AboutSection from '../layout/homePage/AboutSection';
const HomePage = () => {

    return (
        <div>
            <h1>Homepage</h1>
            <SearchSection />
            <PetsToAdoptSection />
            <AboutSection />
        </div>
    )
}

export default HomePage
