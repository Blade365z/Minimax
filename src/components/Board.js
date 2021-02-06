import React, { Component } from 'react'
import Squares from './Squares'
import './game.css';
import { bestMove, checkIfWin, findEmptySpacesInArray, minimax } from './helper';


class Board extends Component {
    state = {
        moves: ['', '', '', '', '', '', '', '', ''],
        currentPlayer: 'X'
    };
    players = ['X', 'O'];
    restart = () =>{
        this.setState({
            moves:Array(9),
            currentPlayer:'X'
        })
    }
    makeMove = (index) => {
        const tempArr = [...this.state.moves];
        if (tempArr[index - 1] === '') {
            if (this.state.currentPlayer === 'X') {
                tempArr[index - 1] = 'O';
                this.setState({ moves: [...tempArr], currentPlayer: 'O' }, () => {
                    if (!checkIfWin(this.state.moves, 'O')) {
                        findEmptySpacesInArray(this.state.moves).length>0 && this.makeMove(bestMove(tempArr, 'X').index + 1)
                    }else{
                    }
                })

            } else {
                tempArr[index - 1] = 'X';
                this.setState({ moves: [...tempArr], currentPlayer: 'X' }, () => {
                        if (checkIfWin(this.state.moves, 'X')) {
                            this.restart();
                        }
                })
            }

            this.props.playerStatus(this.state.currentPlayer)
        } else {
            alert('Already filled!!')
        }
    }

    render() {
        let i = 1, j = 1;
        const movesArr = this.state.moves.map(element => {
            return <Squares key={i++} index={j++} player={element} makeMove={this.makeMove} ></Squares>
        })
        return (
            <div className="board"  >
                {movesArr}
            </div>
        )
    }
}
export default Board;
