import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setSearch } from "../../../redux/search/searchActions";

export const Searchbar = () => {
    const [searchState, setSearchState] = useState('');
    const page = useSelector(state => state.search.page)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        {
            dispatch(increment())
        }
    }

    const handleDecrement = () => {
        {
            page > 1 &&
                dispatch(decrement())
        }
    }

    const handleChange = e => {
        setSearchState(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        {
            searchState !== "" &&
                dispatch(setSearch(searchState))
            setSearchState("")
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
                                <Button type='submit'
                                    aria-label="Search for movie"
                                >
                                    <SearchIcon />
                                </Button>
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
