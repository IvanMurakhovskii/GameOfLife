import React, { FC } from 'react';
import { Button } from '@material-ui/core';


type Props = {
    handleLogout(): void
}

const LogoutButton: FC<Props> = (props) => {
    return (
        <Button
            variant="contained"
            size="small"
            color="secondary"
            id="logout"
            onClick={props.handleLogout}>
            Logout
        </Button>
    );
}

export default LogoutButton;