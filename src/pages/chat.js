import React from 'react';
import Sidebar from './partsHome/sidebar';
import Messages from './Messages';



export const Chat = () => {
    return (
        <div className="app">
            <Sidebar />
            <Messages />
        </div>
    )
}
