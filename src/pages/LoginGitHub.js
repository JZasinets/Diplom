import React, {useContext} from 'react';
import {Button, Container } from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase";


const LoginGithub = () => {
    const {auth} = useContext(Context)

    const loginGit = async () => {
        const provider = new firebase.auth.GithubAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
             <Button onClick={loginGit}>Войти с помощью GitHab</Button>
        </Container>
    );
};

export default LoginGithub;

