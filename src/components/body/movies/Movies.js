import React, { useEffect } from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import { setFavoriteMovie } from '../../../redux/favorite/favoriteActions';
import { setMoviesStart } from "../../../redux/movies/moviesActions";
import { useDispatch, useSelector, connect } from 'react-redux';


import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const Movies = () => {
    const dispatch = useDispatch();
    const getPages = useSelector((state) => state.search.page);
    const getSearch = useSelector((state) => state.search.search);
    const getMovies = useSelector((state) => state.movie.movies);
    console.log(getMovies)

    useEffect(() => {
        if (getSearch !== "" && getSearch !== undefined) {
            dispatch(setMoviesStart());
        }
    }, [getSearch])


    const renderEmpty = getMovies.length === 0 && <p>Start with movie Search</p>;

    const renderList = getMovies?.map((movie) => {
        const { imdbID: id, Title, Year, Type, Poster } = movie;
        return (
            <div key={id} className="MovieListItem">
                <Link to={`/detail/${id}`} >
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
                <Button onClick={(e) => dispatch(setFavoriteMovie(movie))} color="primary" className="buttonAdd">
                    <StarOutlineIcon /> add to Favorite
                </Button>
            </div>)
    })

    return (
        <div className="MovieList">
            {renderEmpty}
            {renderList}
        </div>
    )
}


export default Movies;