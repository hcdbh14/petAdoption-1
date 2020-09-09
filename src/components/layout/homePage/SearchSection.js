import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInputs, clearSearchResults } from '../../../store/pets/action';
import { useHistory } from 'react-router-dom'

const SearchSection = () => {
    const dispatch = useDispatch();
    const petsState = useSelector(state => state.petsReducer);
    let history = useHistory()

    const [searchPetState, setsearchPetState] = useState({
        age: '',
        region: '',
        gender: '',
        type: '',
        vaccinated: '',
        poopTrained: '',
        size: '',
        race: ''
    })
    useEffect(() => {
        dispatch(clearSearchResults())
        setsearchPetState(petsState.searchInputs)
    }, [])

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? setsearchPetState({ ...searchPetState, [name]: checked })
            :
            setsearchPetState({ ...searchPetState, [name]: value ? parseInt(value) : '' })
    }


    const handleClick = () => {
        dispatch(setSearchInputs(searchPetState))
        history.push(`/results`)
    }
    return (
        <div className="search-section">
            <div className="search__dryDetails">
                <div className="search__dryDetails__dropDown">
                    <label>סוג:</label>
                    <select className="search__dropdown" name="type" id="type" onChange={handleChange} value={searchPetState.type}>
                        <option value=''>לא משנה לי</option>
                        <option value="0">כלבים</option>
                        <option value="1">חתולים</option>
                        <option value="2">אחר</option>
                    </select>

                </div>
                <div className="search__dryDetails__dropDown">
                    <label>איזור:</label>
                    <select className="search__dropdown" name="region" id="region" onChange={handleChange} value={searchPetState.region}>
                        <option value=''>לא משנה לי</option>
                        <option value="0">צפון</option>
                        <option value="1">מרכז</option>
                        <option value="2">דרום</option>
                    </select>
                </div>
                <div className="search__dryDetails__dropDown">
                    <label>גיל:</label>
                    <select className="search__dropdown" name="age" id="age" onChange={handleChange} value={searchPetState.age}>
                        <option value=''>לא משנה לי</option>
                        <option value="0">גור</option>
                        <option value="1">צעיר</option>
                        <option value="2">מבוגר</option>
                    </select>
                </div>
                <div className="search__dryDetails__dropDown">
                    <label>מין:</label>
                    <select className="search__dropdown" name="gender" id="gender" onChange={handleChange} value={searchPetState.gender}>
                        <option value=''>לא משנה לי</option>
                        <option value="0">זכר</option>
                        <option value="1">נקבה</option>
                    </select>
                </div>
                <div className="search__dryDetails__dropDown">
                    <label>גודל:</label>
                    <select className="search__dropdown" name="size" id="size" onChange={handleChange} value={searchPetState.size}>
                        <option value=''>לא משנה לי</option>
                        <option value="0">קטן</option>
                        <option value="1">בינוני</option>
                        <option value="2">גדול</option>
                    </select>
                </div>
            </div>
            <div className="search__binary">
                <label>מחונך לצרכים</label>
                <input
                    type="checkbox"
                    name="poopTrained"
                    onChange={handleChange}
                    checked={searchPetState.poopTrained}
                />

                <label>מחוסן</label>
                <input
                    type="checkbox"
                    name="vaccinated"
                    onChange={handleChange}
                    checked={searchPetState.vaccinated}
                />
            </div>

            <button onClick={handleClick} >חפש</button>
        </div>
    )
}

export default SearchSection
