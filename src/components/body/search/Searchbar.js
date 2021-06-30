import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, search } from '../../../redux/reducers/searchReducer';

export const Searchbar = () => {
    const search = useSelector(state => state.search.search)
    const page = useSelector(state => state.search.page)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        if (page > 1) {
            dispatch(decrement())
        }
    }

    const handleChange = e => {
        dispatch(search({
            paylaod: e.target.value
        }))
        console.log(search)
    }
    const handleSubmit = e => {
        e.preventDefault();

        /*  setSubmit(search); */
    }

    return (
        <div className="searchBar">
            <FormControl className="searchBarForm">
                <form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="search-movie-adorment">Search for movie with keyword</InputLabel>
                    <Input
                        id="search-movie-adorment"
                        type='text'
                        fullWidth
                        value={search}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type='submit'
                                    aria-label="Search for movie"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </form>
            </FormControl>
            <p>{page}</p>
            <Button onClick={handleDecrement} color="secondary">Back</Button>
            <Button onClick={handleIncrement} color="primary">Next</Button>
        </div>
    )
}
