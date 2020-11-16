import { Container, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import GameField from './GameField';
import Settings from './GameSettings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%"
    },
  })
);

const Game: FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.paper}>
      <Grid container spacing={1} alignContent="center" alignItems="stretch">
        <Grid item xs={4} >
          <Settings />
        </Grid>
        <Grid item >
          <Paper elevation={3}>
            <GameField />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Game;

// export const GameField = connect(mapStateToProps, mapDispatchToProps)(GameContainer);


