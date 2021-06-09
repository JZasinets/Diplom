import React from 'react';
import '../../styles/widgets.css';
import { InputBase, makeStyles } from '@material-ui/core';
import '../../theme.ts';
import SearchIcon from '@material-ui/icons/Search';

const useStylesSearchInput = makeStyles((theme) => ({
    search: {
        backgroundColor: 'rgb(235, 238, 240)',
        borderRadius: 30,
    }
}))

function Widgets() {
    const classes = useStylesSearchInput();

    return (
        <div className="widgets">
            <h2>Актуальные темы и Вам могут понравится???????</h2>

            <InputBase className={classes.search}
                type="search" fullWidth
                placeholder="Поиск по твиттеру"
            />
            <div>
                <SearchIcon className="widgets_searchIcon"></SearchIcon>
                <input type="text" placeholder="Поиск"/>
            </div>
        </div>
    )
}

export default Widgets;





