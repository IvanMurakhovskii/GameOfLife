import React, { FC, useCallback, useState } from 'react'
import { Button, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { StoreState } from '@/store/store';
import { connect } from 'react-redux';
import { actions } from '@/modules/Authentification/slice';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const mapDispatchToProps = {
    login: actions.login
}

export type Props = typeof mapDispatchToProps;

type inputEvent = React.ChangeEvent<HTMLInputElement>;

const LoginPage: FC<Props> = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = useState({ username: '' });

    const handleSubmit = useCallback((_event) => {
        _event.preventDefault();
        props.login(state.username);
        history.push("/");
    }, [state.username]);

    const handleChange = (event: inputEvent) => {
        setState({ username: event.target.value });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
            </Typography>
                <form className={classes.form} noValidate
                    onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                        value={state.username}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );

}

export const Login = connect(null, mapDispatchToProps)(LoginPage);