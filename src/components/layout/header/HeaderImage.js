import React, { useState } from 'react';
import { switchSearchCategory } from '../../../store/headerSearch/action';
import { useSelector, useDispatch } from 'react-redux';

const HeaderImage = () => {

    const searchState = useSelector(state => state.headerSearchReducer);
    const dispatch = useDispatch();

    const handleCategorySwitch = (userChoice) => {
        dispatch(switchSearchCategory(userChoice));
    }

    return (
        <div className="main__shoutout">


            {/*  temporary search container - might change or removed in near future */}
            {/* 
            <input type="image" className="login-button" src={require('../../../images/login-icon.png')} alt="login-button" />

            <div className="search-container" style={searchState.searchToggle == true ? { width: "50vw", height: "200px" } : { width: "4vw", height: "60x" }} >
                <button className="search-button" onClick={searchState.searchToggle == true ? () => { handleCategorySwitch(5) } : () => { handleCategorySwitch(4) }} />
                {searchState.searchToggle == true ?
                    <div>
                        <button type="button" className="search-category-button" onClick={() => handleCategorySwitch(0)}>כלבים</button>
                        <button type="button" className="search-category-button" onClick={() => handleCategorySwitch(1)}>חתולים</button>
                        <button type="button" className="search-category-button" onClick={() => handleCategorySwitch(2)}>חיות אחרות</button>
                        <button type="button" className="search-category-button" onClick={() => handleCategorySwitch(3)}>עמותות אימוץ</button>
                    </div>
                    : null}
                {searchState.searchToggle == true ?
                    <div>
                        {searchState.searchChoice == 0 ? <h3>dogs</h3> : null}
                        {searchState.searchChoice == 1 ? <h3>cats</h3> : null}
                        {searchState.searchChoice == 2 ? <h3>other animals</h3> : null}
                        {searchState.searchChoice == 3 ? <h3>shelters</h3> : null}
                    </div>
                    : null}
            </div> */}
        </div>
    )
}

export default HeaderImage
