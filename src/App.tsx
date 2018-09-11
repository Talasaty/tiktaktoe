import * as React from 'react';
import  { ThemeProvider } from 'styled-components';
import colors from './tema';
import Header from './Componentes/Header/Header.view';
import Container from './Componentes/Container/Container.view';
import styled from 'styled-components';


const CellStyle = styled.button<{playerColor: number, seted: boolean}>`
    border: none;
    margin: 10px;
    background-color: ${p => p.theme.secondary};
    height: 150px;
    width: 150px;
    color: ${p => p.playerColor === 1 && p.theme.player1};
    color: ${p => p.playerColor === 2 && p.theme.player2};
    color: ${p => p.playerColor === 0 && p.theme.clear};
    cursor: ${p => p.seted === true && 'not-allowed'};
    font-size: 4vw;
`

const Turn = styled.p<{playerTurn: number}>`
  margin: 100px;
  font-size: 3vw;
  color: ${p => p.playerTurn === 1 && 'blue'};
  color: ${p => p.playerTurn === 2 && 'red'};
  color: black;

`

interface State {
  simbols: string[];
  matriz: string[];
  player: number;
}

class App extends React.Component<{}, State> {
  state = {
    simbols: [],
    matriz: [],
    player: 1,
  }

  componentDidMount(){
    let arr = new Array(6)
    let simbols = new Array(6)

    for (let i = 0; i < 6; i++) {
        arr[i] = new Array(6)
        simbols[i] = new Array(6)
        arr[i].fill(["-", 0, false])
        simbols[i].fill("-")
    }

    this.setState({matriz: arr, simbols})

  }

  checkWinner(){
   // let xCounter = 0
    //let oCounter = 0
    //let xPosition = []
    const simbols = this.state.simbols
    for(let a=0; a<6;a++){
      for(let b=0; b<6; b++){
          if(simbols[a][b] === "X"){
            console.log([a,b])
          }
      }
    }
    

  }

  changeTurn = (fila: number, columna: number) => {
      
      let simbol = ""
      let player = 0
      if(this.state.player === 1){
        simbol = "X"
      }else if(this.state.player === 2){
        simbol = "O"
      }else{
        simbol = "-"
      }
      if(this.state.player === 1){
        player = 2
      }else{
        player = 1
      }
      let matrix = this.state.matriz
      let matrixSimbols = this.state.simbols
      matrix[columna][fila] = [simbol, this.state.player, true]
      matrixSimbols[columna][fila] = simbol
      this.setState({matriz: matrix, player, simbols: matrixSimbols})
      this.checkWinner()

  }


  
  render() {
    const { matriz} = this.state
    return (
      <div>
          <ThemeProvider theme={colors}>
              <Header>
                Tik Tak Toe
              </Header>
          </ThemeProvider>
          <Turn playerTurn={this.state.player}>
            Turno del jugador: {this.state.player} !
          </Turn>
          <ThemeProvider theme={colors}>
            <Container> 
                
                {matriz.map((fila: any, indexColumna) => (
                    <div key={indexColumna}>
                    {fila.map((_: any,indexFila: any) => (
                        <CellStyle key={indexFila} disabled={this.state.matriz[indexColumna][indexFila][2]} playerColor={this.state.matriz[indexColumna][indexFila][1]} seted={this.state.matriz[indexColumna][indexFila][2]} onClick={() => this.changeTurn(indexFila, indexColumna)}>
                            {this.state.matriz[indexColumna][indexFila][0]}
                        </CellStyle>
                    ))}
                      
                    </div>   
                  ))}
                
              </Container>
          </ThemeProvider>
          
        </div>
    );
  }
}

export default App;
