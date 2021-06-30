import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ApiKey, BaseSearchUrl } from '../../api/Api';
import { useDispatch, useSelector } from 'react-redux';
import { setDetail } from '../../redux/reducers/detailReducer';
import { Typography } from '@material-ui/core';

export const Detail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const movieDetails = useSelector((state) => state.detail.detail);
    console.log(movieDetails)
    const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, Type, DVD, BoxOffice, Production, Website } = movieDetails;

    const rateRender = Ratings?.map((rating) => {
        return (
            <div key={rating.Value}>
                <p>{rating.Source}</p>
                <p>{rating.Value}</p>
            </div>
        )
    })




    const fetchMovieDetail = async () => {
        const response = await axios.get(`${BaseSearchUrl}?i=${imdbID}&apikey=${ApiKey}`)
            .catch(err => {
                console.log(err, 'error')
            });
        dispatch(setDetail(response.data));
    }

    useEffect(() => {
        if (imdbID && imdbID !== "") {
            fetchMovieDetail()

        };
    }, [imdbID])

    return (
        <div key={imdbID} className="detailContainer">
            <div className="detailPoster"><img key={Poster} src={Poster} alt={Title} /></div>
            <div className="detailText">
                <Typography component="h2" variant="h2">{Title}</Typography>
                <li>{Year}</li>
                <li>{Rated}</li>
                <li>{Released}</li>
                <li>{Runtime}</li>
                <li>{Genre}</li>
                <li>{Director}</li>
                <li>{Writer}</li>
                <li>{Actors}</li>
                <li>{Plot}</li>
                <li>{Language}</li>
                <li >{Country}</li>
                <li >{Awards}</li>
                <li >{Metascore}</li>
                <li >{imdbRating}</li>
                <li >{imdbVotes}</li>
                <li >{Type}</li>
                <li >{DVD}</li>
                <li >{BoxOffice}</li>
                <li >{Production}</li>
                <li >{Website}</li>
                <li>Rating: {rateRender}</li>
            </div>
        </div>
    )
}
