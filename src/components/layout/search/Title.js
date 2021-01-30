import React from 'react'

const Title = () => {
    return (
        <div className="search__title">
            <h1 className="search__title__text">תוצאות חיפוש</h1>
            <img src={require('../../../images/paw.svg')} className="search__title__Image" alt="רגל של כלב" />
        </div>
    )
}

export default Title