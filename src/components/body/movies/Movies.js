import React, { useEffect } from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import { setFavoriteMovie } from '../../../redux/favorite/favoriteActions';
import { setMoviesStart } from "../../../redux/movies/moviesActions";
import { useDispatch, useSelector } from 'react-redux';


import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';


const Movies = () => {
    const dispatch = useDispatch();
    const getPages = useSelector((state) => state.search.page);
    const getSearch = useSelector((state) => state.search.search);
    const getMovies = useSelector((state) => state.movie.movies);
    const getLoading = useSelector((state) => state.movie.moviesLoading);

    useEffect(() => {
        if (getSearch !== "" && getSearch !== undefined) {
            dispatch(setMoviesStart({ search: getSearch, page: getPages }));
        };
    }, [getSearch, getPages])

    const loading = getLoading === true && <CircularProgress color="secondary" />
    const badRequest = getMovies === undefined && <p className="bad__request">Bad request. <br />{getSearch.toUpperCase()} do not exist.<br /> Please try again.</p>;
    const renderEmpty = getMovies?.length === 0 && <p>Start with movie Search</p>;
    const renderList = getMovies?.map((movie) => {
        const { imdbID: id, Title, Year, Type, Poster } = movie;
        const handleAdd = (e) => {
            e.preventDefault()

            dispatch(setFavoriteMovie(movie))
            alert(`${Title} was add to favorite movies`)
        }
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
                <Button onClick={handleAdd} color="primary" className="buttonAdd">
                    <StarOutlineIcon /> add to Favorite
                </Button>
            </div>)

    })

    return (
        <div className="MovieList">
            {loading}
            {renderEmpty}
            {renderList}
            {badRequest}

        </div>
    )
}

export default Movies;