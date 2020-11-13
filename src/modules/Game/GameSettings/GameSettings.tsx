import React, { FC } from 'react';
import { StoreState } from '@/store/store';
import { connect } from 'react-redux';
import { Box, Button, createStyles, Divider, Grid, makeStyles, Slider, Theme, Typography } from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CachedSharpIcon from '@material-ui/icons/CachedSharp';
import { actions } from '../slice';
import { Paper } from '@material-ui/core';
import PatternSelect, { SelectPatterns } from './Select/PatternSelect';
import MaterialSlider from './Slider/MaterialSlider';


const mapStateToProps = ({ gameReducer }: StoreState) => ({
  ...gameReducer
});

const mapDispatchToProps = {
  fillInBoardRandom: actions.fillInBoardRandom,
  updateGame: actions.update,
  stopGame: actions.stop,
  startGame: actions.start,
  clear: actions.clear,
  setSpeed: actions.setSpeed,
  setPopulation: actions.setPopulation,
  insertPattern: actions.insertPattern
}

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    typography: {
      marginLeft: theme.spacing(1)
    }
  }),
);

const GameSettings: FC<Props> = (props: Props) => {
  const classes = useStyles();

  const icon = props.isRunning ? <PauseIcon /> : <PlayArrowRoundedIcon />;

  const hendleClickClear = () => {
    props.stopGame();
    props.clear();
  };

  return (
    <Paper elevation={3}>
      <Grid container spacing={1} direction="column">
        <Grid container item>
          <Typography component="div">
            <Box fontWeight="fontWeightBold" m={1}>
              Game settings
            </Box>
          </Typography>
        </Grid>
        <Grid container item>
          <MaterialSlider
            min={10}
            max={100}
            label="Speed"
            onChangeCommitted={props.setSpeed}
          />
        </Grid>

        <Divider className={classes.button} />

        <Grid container item>
          <MaterialSlider
            min={0}
            max={100}
            label="Population"
            onChangeCommitted={props.setPopulation}
          />
        </Grid>

        <Divider className={classes.button} />

        <Grid container item>
          <PatternSelect onChange={props.insertPattern} />
        </Grid>

        <Divider className={classes.button} />

        <Grid container item >
          <Button color="primary"
            variant="contained"
            className={classes.button}
            onClick={props.isRunning ? props.stopGame : props.startGame}>
            {icon}
          </Button>
          <Button color="primary"
            variant="contained"
            className={classes.button}
            onClick={props.updateGame}>
            <SkipNextIcon />
          </Button>
          <Button color="primary"
            variant="contained"
            className={classes.button}
            onClick={props.fillInBoardRandom}>
            <CachedSharpIcon className={classes.button} />
               Random
            </Button>
          <Button color="default"
            variant="contained"
            className={classes.button}
            onClick={hendleClickClear}>
            Clear
            </Button>
        </Grid>
      </Grid>
    </Paper >
  );
}

export const Settings = connect(mapStateToProps, mapDispatchToProps)(GameSettings);


