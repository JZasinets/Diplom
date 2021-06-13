import React from 'react';
import Sidebar from './partsHome/sidebar';


export const Bookmarks = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="body_Bookmark">
                <div className="feed__header">
                    <h2>Закладки</h2>
                </div>
            </div>
        </div>
    )
}
