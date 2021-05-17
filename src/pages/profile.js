import React, { Fragment } from 'react';
import { CreateTwit } from '../components/post';
import { Twits } from '../components/twits';

export const Profile = () => {
    return (
        <Fragment>
            <h1>Profile page</h1>
            <CreateTwit />
            <Twits />
        </Fragment>
    )
}