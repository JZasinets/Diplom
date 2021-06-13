import React from 'react';
import Sidebar from './partsHome/sidebar';
import Feed from './partsHome/feed';
import Widgets from './partsHome/widgets';

export const Home = () => {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}
