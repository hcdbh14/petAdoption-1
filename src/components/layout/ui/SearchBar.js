import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
const SearchBar = () => {


    const style = ({
        color: "#fff",
        fontSize: "3.3rem",

    })
    return (
        <div className="searchBar">
            <SearchIcon style={style} />
        </div>
    )
}

export default SearchBar
