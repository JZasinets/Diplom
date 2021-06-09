import React, { useContext } from 'react';
import { Button, Container } from "@material-ui/core";
import { Context } from "../index";
import firebase from "firebase";
import '../styles/signIn.css';
import '../theme.ts';

function LoginPassword({email, password}) {
    const [error, setError] = React.useState('');

    const handleSignIn = async () => {
        try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password)

            if (Object.keys(user).length > 0) {
                const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            } else {
                console.log('error')
            }
        } catch(e) {
            setError(e.message)
        }
    }

    return (
        <>
            <Container className="buttonComeIn">
                <Button onClick={handleSignIn} variant="contained" fullWidth>Зарегистрироваться</Button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </Container>
        </>
    )
}

export default LoginPassword;
