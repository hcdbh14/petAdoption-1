import React from 'react'
import PetCard from './PetCard';
import SearchTitle from './SearchTitle';
import Collapsible from './Collapsible';

const Search = () => {
    return (
        <div className="search">
            <SearchTitle />
            <div className="search__section"> 
                <Collapsible />
                <div className="pets">
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                </div>
            </div>
        </div>
    )
}

export default Search
