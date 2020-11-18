import React, { FC, useEffect } from 'react'
import { StoreState } from '@/store/store';
import { actions } from '@/modules/Authentification/slice';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper, styled } from '@material-ui/core';
import { getUsername } from '@/utils';
import AccountField from './AccountField';
import LogoutButton from './LogoutButton';


const mapStateToProps = ({ loginReducer }: StoreState) => ({
    ...loginReducer
});

const mapDispatchToProps = {
    logout: actions.logout,
    setUsername: actions.setUsername
}

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
            <AccountField username={props.username} />
            <LogoutButton handleLogout={handleLogout} />
        </CustomPaper>
    );
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(UserHeader);