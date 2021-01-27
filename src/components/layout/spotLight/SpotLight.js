import React, { useEffect, useState } from 'react';
import PetCard from '../pet/petCard';
import { Link } from 'react-router-dom';
import { SEARCH } from '../../constants/routes';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpotLightPets } from '../../../store/spotLight/action';
import Loading from '../ui/Loading';

const SpotLight = () => {

    const [recordWidth, setRecordWidth] = useState(window.innerWidth)

    window.addEventListener("resize", function () {
        setRecordWidth(window.innerWidth)
    });

    const loadSpotLight = () => {
        if (spotLightState.searchResults.length === 0) {
            dispatch(fetchSpotLightPets())
        }
    }

    useEffect(loadSpotLight, [])
    const dispatch = useDispatch();
    const spotLightState = useSelector(state => state.spotLightReducer);

    const spotLightList = spotLightState.searchResults.length > 0 ? (
        spotLightState.searchResults.map(pet => {
            return (
                <div key={pet.id}>
                    <PetCard pet={pet} />
                    <br />
                    <br />
                </div>)
        })
    ) : (
            <div> No pets yet</div>
        )


    return (
        <div className="spotLight">
            <div className="spotLight__titleWrapper">
                <h2 className="spotLight__titleColored">אמצו&nbsp;</h2> <h2 className="spotLight__title">עכשיו</h2>
            </div>

            <div className="spotLight__container">
                {spotLightState.error !== "" ?
                    <h1>error</h1>
                    : (spotLightState.loading ?
                        <Loading />
                        :
                        <div className="spotLight__results">
                            {spotLightList}

                            {recordWidth < 690 ?

                                <Link to={SEARCH}>
                                    <button className="spotLight__morePets">חיות נוספות</button>
                                </Link>

                                :
                                <div />
                            }
                        </div>
                    )}
            </div>

        </div >
    )
}

export default SpotLight
