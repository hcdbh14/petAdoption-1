import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const FavIcon = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} style={{
            zIndex: '1000',
            position: 'absolute',
            background: 'white',
            top: '65%',
            right: '30%',
            zIndex: "2"
        }}>
            <FavoriteIcon style={{
                fontSize: '4rem',
                animation: 'pulse 1s',

            }} />
        </IconButton>

    )
}

export default FavIcon
