import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailStart } from '../../redux/detail/detailActions';
import { Typography, CircularProgress, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

export const Detail = () => {
    const { imdbID } = useParams();
    const [expanded, setExpanded] = useState();
    const dispatch = useDispatch();
    const getImdbID = imdbID;
    const movieDetails = useSelector((state) => state.detail.detail);
    const movieDetailsLoading = useSelector((state) => state.detail.detailLoading);
    const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, Type, DVD, BoxOffice, Production, Website } = movieDetails;

    useEffect(() => {
        dispatch(setDetailStart(getImdbID));
    }, [getImdbID]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const loading = movieDetailsLoading === true && <div className="loadingProgress"><CircularProgress color="secondary" /></div>
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
                <div className="detailTitle">
                    <Typography component="h2" variant="h2">{Title}</Typography>
                </div>
                <div className="detailMain">
                    <Typography component="p" variant="body1">{Genre}</Typography>
                    <Typography component="p" variant="body1">{Country} | {Year} | {Runtime}</Typography>
                    <Typography component="p" variant="body1">{Language} | {Rated}</Typography>
                </div>
                <div className="detailCast">
                    <Typography component="p" variant="body1">Directors: {Director}</Typography>
                    <Typography component="p" variant="body1">Writers: {Writer}</Typography>
                    <Typography component="p" variant="body1">Actors: {Actors}</Typography>
                    <Typography component="p" variant="body1">Production: {Production}</Typography>
                </div>

                <Accordion square expanded={expanded === 'plot'} onChange={handleChange('plot')}>
                    <AccordionSummary aria-controls="plot-content" id="plot-header">
                        <Typography>Plot</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="p" variant="body1" >
                            {Plot}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'Ratings'} onChange={handleChange('Ratings')}>
                    <AccordionSummary aria-controls="Ratings-content" id="Ratings-header">
                        <Typography>Ratings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="p" variant="body1">Metascore: {Metascore}</Typography>
                        <Typography component="p" variant="body1">Imdb Rating: {imdbRating}</Typography>
                        <Typography component="p" variant="body1">Imdb Votes: {imdbVotes}</Typography>
                        <Typography component="p" variant="body1">Other ratings: {rateRender}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'Other'} onChange={handleChange('Other')}>
                    <AccordionSummary aria-controls="Other-content" id="Other-header">
                        <Typography>Other facts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component="p" variant="body1">DVD released: {DVD}</Typography>
                        <Typography component="p" variant="body1">Box Office: {BoxOffice}</Typography>
                        <Typography component="p" variant="body1">Website: {Website}</Typography>
                    </AccordionDetails>
                </Accordion>
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
