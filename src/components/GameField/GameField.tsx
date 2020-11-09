import styled from '@emotion/styled';
import React, { Component } from 'react';
import Cell from '@/components/Cell';
import { StoreState } from '@/store/store';
import { actions } from './slice';
import { connect } from 'react-redux';

const TableStyle = styled.table`
  margin: 1em 0;
`;

const mapStateToProps = ({ gameReducer }: StoreState) => ({
  ...gameReducer
});

const mapDispatchToProps = {
  toggleAlive: actions.toggleAlive,
  startRandomGame: actions.startRandomGame
}

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class GameContainer extends Component<Props, {}> {

  componentDidMount() {
    this.props.startRandomGame(20);
  }

  render() {
    return (
      <div>
        <TableStyle>
          <tbody>
            {this.props.board.map((row, i) =>
              <tr key={i}> {row.map((cell, j) =>
                <Cell key={j}
                  alive={cell.alive}
                  handleClick={() => { this.props.toggleAlive({ x: i, y: j }); }}
                />
              )}
              </tr>)}
          </tbody>
        </TableStyle>
      </div>
    );
  };
}

export const GameField = connect(mapStateToProps, mapDispatchToProps)(GameContainer);


