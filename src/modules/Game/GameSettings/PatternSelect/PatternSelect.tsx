import React, { FC } from 'react';

import { Select, MenuItem, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import { patterns } from '@/utils';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        select: {
            margin: theme.spacing(1)
        },
        typography: {
            marginLeft: theme.spacing(1)
        }
    }),
);

interface Props {
    onChange(value: number): void
}


const PatternSelect: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const elements = patterns.map((item) => {

        const { id, name } = item;
        return (
            <MenuItem key={id}
                value={id}>
                {name}
            </MenuItem>
        );
    });

    return (
        <>
            <Typography className={classes.typography}>
                Patterns
            </Typography>
            <Select
                className={classes.select}
                fullWidth={true}
                onChange={(event) => props.onChange(event.target.value as number)}>
                {elements}
            </Select>
        </>
    );
}

export default PatternSelect;