import React, { Component } from 'react';
import Cell from '@/components/Cell';
import { StoreState } from '@/store/store';
import { actions } from '../slice';
import { connect } from 'react-redux';

const mapStateToProps = ({ gameReducer }: StoreState) => ({
  ...gameReducer
});

const mapDispatchToProps = {
  toggleAlive: actions.toggleAlive,
  fillInBoardRandom: actions.fillInBoardRandom,
  updateGame: actions.update,
  stopGame: actions.stop,
  startGame: actions.start
}

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class GameContainer extends Component<Props, {}> {

  componentDidMount() {
    this.props.fillInBoardRandom();
  }

  render() {
    return (
      <tbody>
        {this.props.board.map((row, i) =>
          <tr key={i}>{row.map((cell, j) =>
            <Cell key={j}
              alive={cell.alive}
              handleClick={() => { this.props.toggleAlive({ x: i, y: j }); }}
            />
          )}
          </tr>)}
      </tbody>
    );
  };
}

export const GameField = connect(mapStateToProps, mapDispatchToProps)(GameContainer);


