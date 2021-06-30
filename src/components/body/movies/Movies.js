import React, { useEffect } from 'react';
import { BaseSearchUrl, ApiKey } from '../../../api/Api';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { setMovies } from '../../../redux/reducers/moviesReducer';

export const Movies = () => {
    const movies = useSelector((state) => state);
    const dispatch = useDispatch();
    const getPages = useSelector((state) => state.search.page);
    const getSearch = useSelector((state) => state.search.search);

    const fetchMovies = async () => {
        console.log(getSearch)
        const response = await axios.get(`${BaseSearchUrl}?s=${getSearch}&page=${getPages}&apikey=${ApiKey}`)
            .catch((err) => {
                console.log("Err", err)
            });
        if (response.data.Response === "True") {
            dispatch(setMovies(response.data.Search))
            console.log(response.data.Search)
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
        }
    }, [getSearch])


    /*     const renderList = movies?.map((movie) => {
            const { imdbID: id, Title, Year, Type, Poster } = movie;
            return (
                <div key={id} className="movieList">
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
                    <IconButton>
                        <StarOutlineIcon />
                    </IconButton>
                </div>)
        }) */

    return (
        <div>
            {/*  {renderList} */}
        </div>
    )
}
