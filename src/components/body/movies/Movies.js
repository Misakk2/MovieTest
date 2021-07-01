import React, { useEffect } from 'react';
import { BaseSearchUrl, ApiKey } from '../../../api/Api';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { setMovies } from '../../../redux/reducers/moviesReducer';
import { setFavorite } from '../../../redux/reducers/favoriteReducer';

export const Movies = () => {
    const dispatch = useDispatch();
    const getPages = useSelector((state) => state.search.page);
    const getSearch = useSelector((state) => state.search.search);
    const getMovies = useSelector((state) => state.movie.movies);

    const fetchMovies = async () => {
        const response = await axios.get(`${BaseSearchUrl}?s=${getSearch}&page=${getPages}&apikey=${ApiKey}`)
            .catch((err) => {
                console.log("Err", err)
            });
        if (response.data.Response === "True") {
            dispatch(setMovies(response.data.Search))
        } else {
            dispatch(setMovies([]));
            alert(`${getSearch} was not found`)
        }
    };

    useEffect(() => {
        if (getSearch !== "" && getSearch !== undefined) {
            fetchMovies();
        }
    }, [getPages])
    useEffect(() => {
        if (getSearch !== "") {
            fetchMovies();
            console.log(getMovies)
        }
    }, [getSearch])


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
                <Button onClick={(e) => dispatch(setFavorite(movie))} color="primary" className="buttonAdd">
                    <StarOutlineIcon /> add to Favorite
                </Button>
            </div>)
    })

    return (
        <div className="MovieList">
            {renderList}
        </div>
    )
}
