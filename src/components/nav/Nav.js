import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router';

export const Nav = ({ ...props }) => {
    const [value, setValue] = useState(0);
    const history = useHistory();
    return (
        <BottomNavigation
            {...props}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
        >
            <BottomNavigationAction onClick={() => history.push("/")} label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction onClick={() => history.push("/favorite")} label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
    )
}
