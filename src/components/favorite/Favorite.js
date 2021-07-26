import React from 'react';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../redux/favorite/favoriteActions';
import { Link } from 'react-router-dom';

export const Favorite = () => {
    const dispatch = useDispatch();
    const getFavorite = useSelector((state) => state.favorite.favorite);

    const renderListEmpty = getFavorite?.length === 0 && <p key="NofavoriteMovies">You do not have favorite movies</p>

    const renderList = getFavorite?.length > 0 && getFavorite.map((favorit) => {
        const { Title, Year, imdbID, Type, Poster } = favorit;
        const handleRemove = (e) => {
            e.preventDefault()

            dispatch(removeFavorite(imdbID));
        }
        return (
            <div key={imdbID} className="MovieListItem">
                <Link to={`/detail/${imdbID}`} >
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
                        </div>
                    </div>
                </Link>
                <Button onClick={handleRemove} color="primary" className="buttonAdd">
                    <StarIcon /> add to Favorite
                </Button>
            </div>)
    })
    return (
        <div className="MovieList">
            {renderListEmpty}
            {renderList}
        </div>
    )
}