import React from 'react';
// import React, {useState, useEffect} from 'react';
import { Button, makeStyles, Typography, FormControl, FormGroup, TextField } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
// import firebaseApp from '../services/firebase.js';
import '../theme.ts';
import '../styles/signIn.css';
import ModalDialog from '../components/modalDialog/dialog';
import Login from './LoginGoogle.js';

export const useStylesSignIn = makeStyles((theme) => ({
    loginSideTwitterIcon: {
        fontSize: 70,
    },
    loginSideTitle: {
        fontWeight: 900,
        fontSize: 64,
        marginBottom: 50,
    },
    loginSideText: {
        fontWeight: 500,
        fontSize: 31,
        marginBottom: 20,
    },
    registerButton: {
        marginBottom: 20,
        width: '65%',
    },
    loginSideField: {
        marginBottom: 20,
    },
    buttonComeIn: {
        marginTop: 10,
        marginBottom: 20,
    },
}));


export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    }

    const handleCloseModel = (): void => {
        setVisibleModal(undefined);
    }


    return (
        <div className="wrapper">
            <div className="imageSide"></div>
            <div className="loginSide">
                <div className="loginSideWrapper">
                    <TwitterIcon className={classes.loginSideTwitterIcon} color="primary" />
                    <Typography className={classes.loginSideTitle}>В курсе происходящего</Typography>
                    <Typography className={classes.loginSideText}>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                    <Button className={classes.registerButton} variant="contained" color="primary" onClick={handleClickOpenSignUp}>Зарегистрироваться</Button>
                    <Button className={classes.registerButton} variant="outlined" color="primary" onClick={handleClickOpenSignIn}>Войти</Button>

                    <ModalDialog classes={classes} title="Войти в Твиттер" onClose={handleCloseModel} visible={visibleModal === 'signIn'}>
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup area-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleCloseModel} variant="contained" color="primary" className={classes.buttonComeIn} fullWidth>Войти</Button>
                                <Login />
                            </FormGroup>
                        </FormControl>
                    </ModalDialog>
                    <ModalDialog classes={classes} title="Создайте учетную запись" onClose={handleCloseModel} visible={visibleModal === 'signUp'}>
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup area-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="name"
                                    label="Имя"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="email"
                                    label="E-mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                 <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleCloseModel} variant="contained" color="primary" className={classes.buttonComeIn} fullWidth>Далее</Button>
                                <Login />
                            </FormGroup>
                        </FormControl>
                    </ModalDialog>
                </div>
            </div>
        </div>
    )
}