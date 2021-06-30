import React from 'react'
import { Searchbar } from './search/Searchbar';
import { Movies } from './movies/Movies';

export const Body = () => {
    return (
        <>
            <Searchbar />
            <Movies />
        </>
    )
}
