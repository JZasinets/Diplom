import React from 'react';
import Sidebar from './partsHome/sidebar';
import { InputBase } from '@material-ui/core';
import '../styles/smallPages.css';

export const Search = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="body_Search">
                <div className="feed__header">
                    <h2>Поиск</h2>
                </div>
                <InputBase
                    type="search"
                    placeholder="Поиск в твиттере"
                    className="input_search"
                />
            </div>
        </div>
    )
}
