import styled from '@emotion/styled';
import React, { FC } from 'react'


export interface CellProps {
    alive: boolean,
    handleClick(): void,
}


const CellStyle = styled.td<CellProps>`
    background: ${(props) => props.alive && '#3700B3'};
    background: $primary-color;
    border: 1px solid #DDD;
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