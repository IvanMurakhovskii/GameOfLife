import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }),
);

type inputEvent = React.ChangeEvent<HTMLInputElement>;

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
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                autoFocus
                onChange={(event) => props.handleChange(event.target.value)}
                value={props.value}
            />
        </>
    );
}

export default InputText;