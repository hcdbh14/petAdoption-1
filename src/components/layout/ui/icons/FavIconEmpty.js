import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

const FavIconEmpty = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} >
            <FavoriteBorderIcon style={{ fontSize: '4rem', animation: 'fadeIn  1s' }} />
        </IconButton>

    )
}

export default FavIconEmpty
