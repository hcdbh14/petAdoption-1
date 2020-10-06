import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const FavIcon = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} >
            <FavoriteIcon style={{ fontSize: '4rem', animation: 'pulse 1s' }} />
        </IconButton>

    )
}

export default FavIcon
