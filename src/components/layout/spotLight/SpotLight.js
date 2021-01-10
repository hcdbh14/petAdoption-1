import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpotLightPets } from '../../../store/spotLight/action';
import PetCard from '../pet/PetCard';

const SpotLight = () => {

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
                    <PetCard name={pet.name} goodWords={pet.goodWords} region={pet.region} age={pet.age} gender={pet.gender} image={pet.image} />
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
                        <h1>loading</h1>
                        :
                        <div className="spotLight__results">
                            {spotLightList}
                        </div>
                    )}

            </div>
        </div >
    )
}

export default SpotLight
