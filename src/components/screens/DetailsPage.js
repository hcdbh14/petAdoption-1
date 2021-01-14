import React, { useEffect } from 'react';
import PetDetails from '../layout/pet/PetDetails';

const DetailsPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="main">
            <PetDetails />
        </div >
    )
}

export default DetailsPage
