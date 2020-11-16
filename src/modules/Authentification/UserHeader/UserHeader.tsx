import React, { FC, useEffect } from 'react'
import { StoreState } from '@/store/store';
import { actions } from '@/modules/Authentification/slice';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, createStyles, makeStyles, Paper, Typography, Theme, styled } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { getUsername } from '@/utils';


const mapStateToProps = ({ loginReducer }: StoreState) => ({
    ...loginReducer
});

const mapDispatchToProps = {
    logout: actions.logout,
    setUsername: actions.setUsername
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            flexGrow: 1,
        }
    }),
);

const CustomPaper = styled(Paper)({
    backgroundColor: '#3f51b5',
    color: '#fff',
    minHeight: 64,
    display: "flex",
    position: 'relative',
    alignItems: 'center',
    flexDirection: "row",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
});

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const UserHeader: FC<Props> = (props) => {
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        getUsername().then((username) => {
            props.setUsername(username);
        });
    });

    const handleLogout = () => {
        props.logout();
        history.push('/login');
    }

    return (
        <CustomPaper elevation={3}>
            <AccountCircleIcon fontSize="large" />
            <Typography className={classes.typography}>
                {props.username}
            </Typography>
            <Button
                variant="contained"
                size="small"
                color="secondary"
                id="logout"
                onClick={handleLogout}>
                Logout
            </Button>
        </CustomPaper>
    );
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(UserHeader);