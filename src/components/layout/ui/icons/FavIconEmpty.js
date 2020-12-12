import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

const FavIconEmpty = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} classes={{ root: "favIcon" }}>
            <FavoriteBorderIcon style={{
                animation: 'fadeIn  1s',
                fontSize: '4rem',
            }} />
        </IconButton>

    )
}

export default FavIconEmpty

