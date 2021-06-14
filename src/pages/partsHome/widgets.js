import React from 'react';
import '../../styles/widgets.css';
import { InputBase, makeStyles } from '@material-ui/core';
import '../../theme.ts';

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
            <h2>Твиттер</h2>
            <div>это одно из лучших социальных медиа и источник информации о событиях в мире</div>

            <InputBase className={classes.search}
                type="search" fullWidth
                placeholder="Поиск по твиттеру"
            />
        </div>
    )
}

export default Widgets;





