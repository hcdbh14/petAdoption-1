import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SearchResultItem from '../pet/searchReslts/SearchResultItem';
import { fetchPets } from '../../store/pets/action'

const SearchResultsPage = () => {
    const petsState = useSelector(state => state.petsReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchPets(petsState.searchInputs))
        return () => {

        }
    }, [])
    const resultItems = petsState.searchResults.map((pet, i) => <SearchResultItem pet={pet} key={i} />)

    return (
        <div>
            SearchResultsPage
            {petsState.loading ? <h3>Loading...</h3> : resultItems}
        </div>
    )
}

export default SearchResultsPage
