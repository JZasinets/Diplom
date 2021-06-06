import React from 'react';
// import React, {useContext} from 'react';
import Sidebar from './partsHome/sidebar';
import Feed from './partsHome/feed';
import Widgets from './partsHome/widgets';
// import {useAuthState} from "react-firebase-hooks/auth";
// import {Context} from "../index";

export const Home = () => {
    // const { auth, firestore } = useContext(Context)
    // const [user] = useAuthState(auth)

    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}
