import * as React from 'react';
import styled from 'styled-components';

const CellStyle = styled.button<{playerColor: number}>`
    border: none;
    margin: 0px;
    background-color: ${p => p.theme.secondary};
    height: 150px;
    width: 150px;
    color: ${p => p.playerColor === 1 && p.theme.player1};
    color: ${p => p.playerColor === 2 && p.theme.player2};
    color: ${p => p.playerColor === 0 && p.theme.clear};
    font-size: 4vw;
`

const Cells = (player: number) =>{
  
        return(
            <CellStyle playerColor={player}>
                Celda
            </CellStyle>
        )
    }
export default Cells
