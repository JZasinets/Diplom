import React, { useContext } from 'react';
import { Button, Container } from "@material-ui/core";
import firebase from "firebase";
import '../../styles/signIn.css';
import '../../theme.ts';

function SignInPassword({email, password}) {
    const [error, setError] = React.useState('');

    const handleClickCreateUser = async () => {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)

            if (user.user.email === email) {
                console.log('good');
            } else {
                console.error('error')
            }
        } catch(e) {
            setError(e.message)
        }
    }

    return (
        <>
            <Container className="buttonComeIn">
                <Button onClick={handleClickCreateUser} variant="contained" fullWidth>Войти</Button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </Container>
        </>
    )
}

export default SignInPassword;