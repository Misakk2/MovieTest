import React from 'react';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../redux/reducers/favoriteReducer';

export const Favorite = () => {
    const dispatch = useDispatch();
    const getFavorite = useSelector((state) => state.favorite.favorite);


    const renderListEmpty = getFavorite.length === 0 && <p key="NofavoriteMovies">You do not have favorite movies</p>

    const renderList = getFavorite.length > 0 && getFavorite.map((favorit) => {
        const { Title, Year, imdbID, Type, Poster } = favorit;
        return (
            <div key={imdbID} className="responseCard">
                <div className="posterWrapper">
                    {Poster ? (
                        <img src={Poster} alt={`${Title} Poster`} />
                    ) : (
                        <div className="noPoster">Movie {Title} do not have a poster</div>
                    )}
                    <div className="info">
                        <div className="movieTitle">
                            <Typography component="h3" variant="h6">{Title}</Typography>
                            {Year ? <Typography component="p" variant="subtitle1">{Year}</Typography> : "-"}
                            {Type ? <Typography component="p" variant="subtitle1">{Type}</Typography> : "-"}
                        </div>
                        <IconButton onClick={(e) => dispatch(removeFavorite(imdbID))}>
                            <StarIcon />
                        </IconButton>
                    </div>
                </div>
            </div>)
    })
    return (
        <div className="MovieList">
            {renderListEmpty}
            {renderList}
        </div>
    )
}