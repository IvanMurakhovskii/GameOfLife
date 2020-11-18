import React, { FC } from 'react';
import { makeStyles, Theme, createStyles, Button } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }),
);

interface Props {
    disabled: boolean
}

const SignInButton: FC<Props> = (props) => {
    const classes = useStyles();
    return (
        <>
            <Button
                disabled={props.disabled}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                Sign In
            </Button>
        </>
    );
}

export default SignInButton;