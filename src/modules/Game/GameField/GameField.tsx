import React, { Component } from 'react';
import Cell from '@/components/Cell';
import { BoardType, Coordinate } from '@/types';

type Props = {
  board: BoardType,
  toggleAlive(point: Coordinate): void,
  fillInBoardRandom(): void
}

export default class GameField extends Component<Props, {}> {

  componentDidMount() {
    this.props.fillInBoardRandom();
  }

  render() {
    return (
      <table>
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
      </table>
    );
  };
}



