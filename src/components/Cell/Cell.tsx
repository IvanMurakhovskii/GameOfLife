import styled from '@emotion/styled';
import React, { FC } from 'react'


export interface CellProps {
    alive: boolean,
    handleClick(): void,
}

const CellStyle = styled.td<CellProps>`
    background: ${(props) => props.alive && '#3700B3'};
    border: 1px solid #000000;
    height: 1em;
    width: 1em;
    &:hover {
            background: ${(props) => !props.alive && '#DDD'};
        }
`;

const Cell: FC<CellProps> = (props: CellProps) => {
    return (
        <CellStyle {...props}
            onClick={props.handleClick}>
        </CellStyle>
    );
}

export default Cell;