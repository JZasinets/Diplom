import React, {useContext} from 'react';
import {Button, Container } from "@material-ui/core";
import {Context} from "../../index";
import firebase from "firebase";


const LoginGoogle = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
             <Button onClick={login}>Войти с помощью Google</Button>
        </Container>
    );
};

export default LoginGoogle;