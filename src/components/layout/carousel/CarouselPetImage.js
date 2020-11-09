import React from 'react'
import FavIcon from '../ui/icons/FavIcon';
import FavIconEmpty from '../ui/icons/FavIconEmpty';
const CarouselPetImage = (props) => {
    const style = { transform: `rotate(${props.deg})` }
    let img = document.getElementById(`image-${props.id}`);
    //or however you get a handle to the IMG
    // var width = img.clientWidth;
    // var height = img.clientHeight;
    console.log(img)
    return (
        <div className="carousel__item__imageFrame" style={style}>
            {/* <img src="../../../images/frame.png" alt="image frame" className="carousel__item__imageFrame" /> */}
            <img src={props.image} alt="petImage" className="carousel__item__image" id={`image-${props.id}`} />
            <FavIcon />
            {/* <FavIconEmpty /> */}

        </div>
    )
}

export default CarouselPetImage
