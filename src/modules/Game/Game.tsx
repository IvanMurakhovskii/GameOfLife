import Header from '@/modules/Authentification/UserHeader';
import { StoreState } from '@/store/store';
import { Container, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { FC, useCallback } from 'react';
import { connect } from 'react-redux';
import GameField from './GameField';
import GameSettings from './GameSettings';
import { actions } from './slice';

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
  insertPattern: actions.insertPattern,
  toggleAlive: actions.toggleAlive
}


export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%"
    },
  })
);

const GameContainer: FC<Props> = (props) => {
  const classes = useStyles();

  const handleClickClear = useCallback(() => {
    props.stopGame();
    props.clear();
  },
    [props.isRunning]
  );

  return (
    <Container component="main" className={classes.container}>
      <Grid container spacing={2} alignContent="center" alignItems="stretch">
        <Grid item xs={4} >
          <Header />
          <GameSettings
            isRunning={props.isRunning}
            fillInBoardRandom={props.fillInBoardRandom}
            updateGame={props.updateGame}
            stopGame={props.stopGame}
            startGame={props.startGame}
            clear={handleClickClear}
            setSpeed={props.setSpeed}
            setPopulation={props.setPopulation}
            insertPattern={props.insertPattern} />
        </Grid>
        <Grid item >
          <Paper elevation={3}>
            <GameField
              board={props.board}
              toggleAlive={props.toggleAlive}
              fillInBoardRandom={props.fillInBoardRandom} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer);

