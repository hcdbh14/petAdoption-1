import React, { useEffect, useState } from 'react';
import Shelters from '../layout/homePage/Shelters';
import Responsibility from '../layout/homePage/Responsibility';
import MiniSearch from '../layout/search/MiniSearch';
import SpotLight from '../layout/spotLight/SpotLight';
import HeaderImage from '../layout/header/HeaderImage';

const HomePage = () => {

    const [recordWidth, setRecordWidth] = useState(window.innerWidth)

    window.addEventListener("resize", function () {
        setRecordWidth(window.innerWidth)
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="main">
            <HeaderImage />
            <MiniSearch />
            {recordWidth < 900 ?
                <Responsibility />
                :
                <div />
            }

            <SpotLight />
            {recordWidth > 900 ?
                <Responsibility />
                :
                <div />
            }
            <Shelters />
        </div >

    )
}

export default HomePage
