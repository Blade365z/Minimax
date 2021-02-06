import React, { Component } from 'react'
import Squares from './Squares'
import './game.css';

class Board extends Component {
    state = {
        moves: [null, null, null, null, null, null, null, null, null],
        currentPlayer: 'X'
    };
    players = ['X', 'O'];
    makeMove = (index) => {
        const tempArr = [...this.state.moves];
        if (tempArr[index - 1] === null) {
            if (this.state.currentPlayer === 'X') {
                tempArr[index - 1] = 'O';
                this.setState({ moves: [...tempArr], currentPlayer: 'O' }, () => {
                    this.checkIfWin(this.state.moves, index, 'O');
                })
            } else {
                tempArr[index - 1] = 'X';
                this.setState({ moves: [...tempArr], currentPlayer: 'X' }, () => {
                    this.checkIfWin(this.state.moves, index, 'X');
                })
            }
            this.props.playerStatus(this.state.currentPlayer)
        } else {
            alert('Already filled!!')
        }
    }
    checkIfWin = (movesArr, move, player) => {
        for (let i = 0; i <= 2; i++) {
            if (i === 0) {
                if ((movesArr[0] == player && movesArr[4] == player && movesArr[8] == player) || (movesArr[2] == player && movesArr[4] == player && movesArr[6] == player)) {
                    console.log(player, ' won!')
                    break;
                }
            }
            else if ((movesArr[i * 3 + 0] == player && movesArr[i * 3 + 1] == player && movesArr[i * 3 + 2] == player) || (movesArr[0 * 3 + i] == player && movesArr[1 * 3 + i] == player && movesArr[2 * 3 + i] == player)) {
                console.log(player, ' won!')
                break;
            }

        }
        if (!movesArr.includes(null)) {
            console.log('Draw!')
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
