import React, { FC, useCallback, useState } from 'react'
import { Grid, makeStyles, Paper, styled } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import SignInButton from './SignInButton';
import InputText from './InputText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
    grid: {
        marginTop: theme.spacing(1),
    }
}));

type Props = {
    login(username: string): void
}

const CustomPaper = styled(Paper)({
    backgroundColor: '#3f51b5',
    color: '#fff',
    minHeight: 64,
    paddingLeft: 10,
    paddingRight: 10
});

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
            <Paper className={classes.paper} elevation={3}>
                <Grid container direction="row" alignItems="center" justify="center" className={classes.grid}>
                    <AccountCircleIcon fontSize="large" color="primary" />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </Grid>

                <form className={classes.form} noValidate
                    onSubmit={handleSubmit}>
                    <InputText
                        handleChange={handleChange}
                        value={state.username} />
                    <SignInButton disabled={(state.username.trim() === '')} />
                </form>
            </Paper>
        </Container>
    );
}

export default LoginForm;