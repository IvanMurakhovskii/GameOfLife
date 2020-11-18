import React, { FC } from 'react';
import { Typography, Slider, makeStyles, Theme, createStyles, Tooltip } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        slider: {
            margin: theme.spacing(1),
        },
        typography: {
            marginLeft: theme.spacing(1)
        }
    }),
);

interface Props {
    label: string
    min: number
    max: number
    disabled: boolean
    title: string
    onChangeCommitted(value: number): void
};

const MaterialSlider: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const { min, max, label, onChangeCommitted } = { ...props };

    return (
        <>
            <Typography className={classes.typography}>
                {label}
            </Typography>
            <Tooltip title={props.title}>
                <Slider
                    disabled={props.disabled}
                    className={classes.slider}
                    defaultValue={max / 2}
                    valueLabelDisplay="auto"
                    min={min}
                    max={max}
                    onChangeCommitted={(event, value) => {
                        onChangeCommitted(value as number);
                    }}
                />
            </Tooltip>

        </>
    );
}

export default MaterialSlider;