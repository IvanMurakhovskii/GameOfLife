import React, { FC, useCallback, useState } from 'react'
import { makeStyles, Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import SignInButton from './SignInButton';
import InputText from './InputText';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },

}));

type Props = {
    login(username: string): void
}

const LoginForm: FC<Props> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = useState({ username: '' });

    const handleSubmit = useCallback((_event) => {
        _event.preventDefault();
        props.login(state.username);
        history.push("/");
    }, [state.username]);

    const handleChange = (username: string) => {
        setState({ username: username });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate
                    onSubmit={handleSubmit}>
                    <InputText
                        handleChange={handleChange}
                        value={state.username} />
                    <SignInButton />
                </form>
            </Paper>
        </Container>
    );

}

export default LoginForm;