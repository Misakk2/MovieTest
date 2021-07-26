import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailStart } from '../../redux/detail/detailActions';
import { Typography, CircularProgress } from '@material-ui/core';

export const Detail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const getImdbID = imdbID;
    const movieDetails = useSelector((state) => state.detail.detail);
    const movieDetailsLoading = useSelector((state) => state.detail.detailLoading);
    const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, Type, DVD, BoxOffice, Production, Website } = movieDetails;

    useEffect(() => {
        dispatch(setDetailStart(getImdbID));
    }, [getImdbID])

    const loading = movieDetailsLoading === true && <CircularProgress color="secondary" />
    const rateRender = Ratings?.map((rating) => {
        return (
            <div key={rating.Value}>
                <p>{rating.Source}</p>
                <p>{rating.Value}</p>
            </div>
        )
    })
    const details = movieDetailsLoading !== true && (

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



    return (
        <>
            {details}
            {loading}
        </>
    )
}
