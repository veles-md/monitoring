import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Container, TextField, Typography, makeStyles } from '@material-ui/core';

import { Facebook, LockOutlined } from '@material-ui/icons';

import AuthService from '../../auth.service'
import { useDispatch, useSelector } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/pairs';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))





export const PublicLayout = () => {
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector((state: any) => state.user);
    const [isAuthed, setAuth] = useState(false);
    AuthService.isAuthenticated$.subscribe(isAuth => {
        setAuth(isAuth);
        history.push('/dashboard');
    })
    const dispatch = useDispatch();
    const login = (e) => {
        e.preventDefault();
        // setAuth(false);
        dispatch({ type: 'OMG' })
        console.log('Loggin in')
        // AuthService.login();
    }
    return (
        <Container component="main" maxWidth="xs">
            AUTH: {JSON.stringify(user)}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">Sign in</Typography>
                <form className={classes.form} noValidate>
                    <TextField label="Email" variant="outlined" margin="normal" required fullWidth />
                    <TextField label="Password" variant="outlined" margin="normal" required fullWidth />
                    <Button
                        onClick={(e) => login(e)}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                    <Button
                        type="submit"
                        startIcon={<Facebook />}
                        fullWidth
                        variant="contained"
                        color="primary">
                        Login with Facebook
                    </Button>
                </form>
            </div>
        </Container>
    )
}