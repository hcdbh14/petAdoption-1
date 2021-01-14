import React, { useEffect } from 'react';
import Search from '../layout/search/Search';

const SearchPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main">
            <Search />
        </div >
    )
}

export default SearchPage
