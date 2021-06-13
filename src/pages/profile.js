import React from 'react';
import Sidebar from './partsHome/sidebar';
import ProfileTwits from './partsHome/profile';

export const Profile = () => {
    return (
        <div className="app">
            <Sidebar />
            <ProfileTwits />
        </div>
    )
}
