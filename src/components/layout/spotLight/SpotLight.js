import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpotLightPets } from '../../../store/spotLight/action';
import PetCard from '../pet/PetCard';
import Loading from '../ui/Loading';

const SpotLight = () => {
    const spotLightState = useSelector(state => state.spotLightReducer);
    console.log(spotLightState)
    const { loading, error, searchResults } = spotLightState
    const loadSpotLight = () => {
        if (spotLightState.searchResults.length === 0) {
            dispatch(fetchSpotLightPets())
        }
    }

    useEffect(loadSpotLight, [])
    const dispatch = useDispatch();

    const spotLightList = searchResults.length > 0 ? (
        searchResults.map(pet => {
            return (
                <div key={pet.id}>
                    <PetCard pet={pet} loading={loading} />
                    <br />
                    <br />
                </div>)
        })
    ) : (
            <Loading />
        )


    return (
        <div className="spotLight ">
            <div className="spotLight__titleWrapper">
                <h2 className="spotLight__titleColored">אמצו&nbsp;</h2> <h2 className="spotLight__title">עכשיו</h2>
            </div>

            <div className="spotLight__container">
                {error !== "" ?
                    <h1>error</h1>
                    :
                    <div className="spotLight__results">
                        {spotLightList}
                    </div>
                }
            </div>
        </div >
    )
}

export default SpotLight
