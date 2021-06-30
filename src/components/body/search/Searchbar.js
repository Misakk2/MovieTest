import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';

export const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [submit, setSubmit] = useState("")

    const handleChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search)
    }
    const handleSubmit = e => {
        e.preventDefault();

        setSubmit(search);
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
        </div>
    )
}
