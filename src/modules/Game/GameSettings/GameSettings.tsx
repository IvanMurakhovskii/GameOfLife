import React, { FC } from 'react';
import { Box, Button, ButtonGroup, createStyles, Divider, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CachedSharpIcon from '@material-ui/icons/CachedSharp';
import { Paper } from '@material-ui/core';
import PatternSelect from './PatternSelect';
import MaterialSlider from './MaterialSlider';

type Props = {
  isRunning: boolean
  fillInBoardRandom(): void,
  updateGame(): void,
  stopGame(): void,
  startGame(): void,
  clear(): void,
  setSpeed(speed: number): void,
  setPopulation(population: number): void,
  insertPattern(patternId: number): void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    typography: {
      marginLeft: theme.spacing(1)
    },
    divider: {
      margin: theme.spacing(1),
    },
    buttonGroup: {
      width: "100%",
      justifyContent: "space-between"
    }
  }),
);

const GameSettings: FC<Props> = (props: Props) => {
  const classes = useStyles();

  const icon = props.isRunning ? <PauseIcon /> : <PlayArrowRoundedIcon />;

  return (
    <Paper elevation={3} >
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
            disabled={false}
            title="game speed"
            min={10}
            max={100}
            label="Speed"
            onChangeCommitted={props.setSpeed}
          />
        </Grid>

        <Divider className={classes.divider} />

        <Grid container item>
          <MaterialSlider
            disabled={props.isRunning}
            title="percentage alive cells at random filling board"
            min={0}
            max={100}
            label="Population"
            onChangeCommitted={props.setPopulation}
          />
        </Grid>

        <Divider className={classes.divider} />

        <Grid container item>
          <PatternSelect onChange={props.insertPattern} />
        </Grid>

        <Divider className={classes.divider} />

        <Grid container item >
          <ButtonGroup className={classes.buttonGroup}>
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
              onClick={props.clear}>
              Clear
            </Button>
          </ButtonGroup>

        </Grid>
      </Grid>
    </Paper >
  );
}

export default GameSettings;


