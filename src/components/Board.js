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
        console.log(index)
        const tempArr = this.state.moves;
        if (tempArr[index - 1] === null) {
            if (this.state.currentPlayer === 'X') {
                tempArr[index - 1] = 'O';
                this.setState({ moveArr: tempArr, currentPlayer: 'O' })
            } else {
                tempArr[index - 1] = 'X';
                this.setState({ moveArr: tempArr, currentPlayer: 'X' })
            }
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
