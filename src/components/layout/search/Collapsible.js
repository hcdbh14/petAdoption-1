import React, { useState } from 'react'


const Collapsible = (props) => {

    const initialState = {
        searchOptions: [
            { type: "byName", opened: false },
            { type: "byRace", opened: false },
            { type: "byArea", opened: false },
            { type: "byGender", opened: false },
            { type: "byAge", opened: false }
        ]
    }
    const [state, setState] = useState(initialState)
    
    const expandOrCollapse = (index) => {
        let tmp = state.searchOptions;
        console.log(index);
        console.log(tmp[index].opened);
        tmp[index].opened = !tmp[index].opened;
        setState({ searchOptions: tmp });
    }

    return (
        <div className="search__section__advanced">
            <p className="search__section__advanced__title">חיפוש מתקדם</p>

            <div class="wrap-collabsible">
                <input id="collapsible1" class="toggle" type="checkbox" />
                <label for="collapsible1" class="lbl-toggle">לפי שם</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <div class="wrap">
                            <div class="name-search" onClick={() => expandOrCollapse(0)} >
                                <input type="text" class="searchTerm" placeholder="ספלאנק" />
                                <img src={require('../../../images/search-icon.png')} alt="Logo" className="searchButton" />

                            </div>
                            <button class="update-button">חיפוש</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="wrap-collabsible">
                <input id="collapsible2" class="toggle" type="checkbox" />
                <label for="collapsible2" class="lbl-toggle">סוג חייה</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <button className="filterButton">כולם (100)</button>
                        <button className="filterButton">כלב (25)</button>
                        <button className="filterButton">חתול (63)</button>
                    </div>
                </div>
            </div>

            <div class="wrap-collabsible">
                <input id="collapsible3" class="toggle" type="checkbox" />
                <label for="collapsible3" class="lbl-toggle">אזור</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <button className="filterButton">צפון (33)</button>
                        <button className="filterButton">מרכז (78)</button>
                        <button className="filterButton">דרום (11)</button>
                    </div>
                </div>
            </div>

            <div class="wrap-collabsible">
                <input id="collapsible4" class="toggle" type="checkbox" />
                <label for="collapsible4" class="lbl-toggle">מין</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <button className="filterButton">זכר (53)</button>
                        <button className="filterButton">נקבה (54)</button>
                    </div>
                </div>
            </div>

            <div class="wrap-collabsible">
                <input id="collapsible5" class="toggle" type="checkbox" />
                <label for="collapsible5" class="lbl-toggle">גיל</label>
                <div class="collapsible-content">
                    <div class="content-inner">
                        <button className="filterButton">צעיר (22)</button>
                        <button className="filterButton">בוגר (45)</button>
                        <button className="filterButton">מבוגר (30)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collapsible