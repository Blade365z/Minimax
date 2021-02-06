import React, { Component } from 'react'
import Squares from './Squares'
import './game.css';
import { checkIfWin, findEmptySpacesInArray } from './helper';


class Board extends Component {
    state = {
        moves: [null, null, null, null, null, null, null, null, null],
        currentPlayer: 'X'
    };
    players = ['X', 'O'];

    makeMove = (index) => {
        const tempArr = [...this.state.moves];
        let nextPlayer = 'X';
        if (tempArr[index - 1] === null) {
            if (this.state.currentPlayer === 'X') {
                tempArr[index - 1] = 'O';
                nextPlayer='O'
            } else {
                tempArr[index - 1] = 'X';
                nextPlayer='X'
            }
            this.setState({ moves: [...tempArr], currentPlayer: nextPlayer }, () => {
                checkIfWin(this.state.moves, index, nextPlayer);
                console.log(findEmptySpacesInArray(this.state.moves));
            })
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
