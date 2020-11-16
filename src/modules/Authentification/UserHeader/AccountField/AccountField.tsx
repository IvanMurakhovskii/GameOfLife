import React, { FC } from 'react';
import { createStyles, makeStyles, Typography, Theme, Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            flexGrow: 1,
        }
    }),
);

type Props = {
    username: string
}

const AccountField: FC<Props> = (props) => {
    const classes = useStyles();
    return (
        <Grid container direction="row" alignItems="center">
            <AccountCircleIcon fontSize="large" />
            <Typography className={classes.typography}>
                {props.username}
            </Typography>
        </Grid>
    );
}

export default AccountField;