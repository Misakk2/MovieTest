import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setSearch } from '../../../redux/reducers/searchReducer';

export const Searchbar = () => {
    const [searchState, setSearchState] = useState('');
    const page = useSelector(state => state.search.page)
    const searchDisplay = useSelector(state => state.search.search)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        if (searchState !== "") {
            dispatch(increment())
        }
    }

    const handleDecrement = () => {
        if (page > 1) {
            dispatch(decrement())
        }
    }

    const handleChange = e => {
        setSearchState(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (searchState !== "") {
            dispatch(setSearch(searchState))
        }
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
                        value={searchState}
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
                <div className="ButtonContainer">
                    <Button onClick={handleDecrement} color="secondary">Back</Button>
                    <Button onClick={handleIncrement} color="primary">Next</Button>
                </div>
            </FormControl>
        </div>
    )
}
