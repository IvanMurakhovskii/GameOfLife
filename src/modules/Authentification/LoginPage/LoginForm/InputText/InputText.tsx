import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';


type Props = {
    handleChange(username: string): void
    value: string
}

const InputText: FC<Props> = (props) => {
    return (
        <>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="usernameId"
                label="Username"
                name="username"
                autoFocus
                onChange={(event) => props.handleChange(event.target.value)}
                value={props.value}
            />
        </>
    );
}

export default InputText;