import React from 'react'
import Search from '../layout/search/Search';

const HomePage = () => {
    const styleColored = {
        display: 'inline-block', color: '#5ac5d9', marginRight: '2rem'
    }
    const style = {
        display: 'inline-block'
    }

    return (

        <div className="main">
            <Search />
        </div >
    )
}

export default HomePage
