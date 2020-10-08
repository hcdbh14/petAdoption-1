import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const FavIcon = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} style={{
            zIndex: '1000',
            position: 'absolute',
            fontSize: '7rem',
            color: 'red',
            background: 'white',
            borderRadius: '50%',
            padding: '1rem',
            bottom: '0',
            right: '150%',
        }}>
            <FavoriteIcon style={{
                fontSize: '4rem',
                animation: 'pulse 1s',

            }} />
        </IconButton>

    )
}

export default FavIcon
