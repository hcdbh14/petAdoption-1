import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../../store/pets/action';
import { Link } from 'react-router-dom';
import { SEARCH } from '../../constants/routes';

const HomePageSearch = () => {

    const dispatch = useDispatch();
    const petsState = useSelector(state => state.petsReducer);

    const petTypeHandleChange = (pickedValue) => {

        petsState.searchInputs.petType = pickedValue.target.value
        dispatch(updateFilter())
    }

    const regionHandleChange = (pickedValue) => {
        petsState.searchInputs.region = pickedValue.target.value
        dispatch(updateFilter())
    }

    const genderHandleChange = (pickedValue) => {
        petsState.searchInputs.gender = pickedValue.target.value
        dispatch(updateFilter())
    }

    const ageGroupHandleChange = (pickedValue) => {
        petsState.searchInputs.ageGroup = pickedValue.target.value
        dispatch(updateFilter())
    }

    return (
        <div className="miniSearch">
            <h2 className="miniSearch__title">חיפוש חיות</h2>
            <div>

                <select className="miniSearch__dropdown" value={petsState.searchInputs.petType} onChange={petTypeHandleChange}>
                    <option value="">סוג חיה</option>
                    <option value="dog">כלב</option>
                    <option value="cat">חתול</option>
                    <option value="other">אחר</option>
                </select>

                <select className="miniSearch__dropdown" value={petsState.searchInputs.region} onChange={regionHandleChange}>
                    <option value="">אזור</option>
                    <option value="north">צפון</option>
                    <option value="center">מרכז</option>
                    <option value="south">דרום</option>
                </select>
                <br />
                <select className="miniSearch__dropdown" value={petsState.searchInputs.gender} onChange={genderHandleChange}>
                    <option value="">מין</option>
                    <option value="male">זכר</option>
                    <option value="female">נקבה</option>
                </select>

                <select className="miniSearch__dropdown" value={petsState.searchInputs.ageGroup} onChange={ageGroupHandleChange}>
                    <option value="">גיל</option>
                    <option value="young">צעיר</option>
                    <option value="adult">בוגר</option>
                    <option value="elder">מבוגר</option>
                </select>
            </div>

                <Link to={SEARCH}>
                    <button className="miniSearch__button" type="button">חיפוש</button>
                </Link>


        </div>
    )
}

export default HomePageSearch
