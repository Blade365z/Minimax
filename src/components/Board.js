import React, { Component } from 'react'
import Squares from './Squares'
import './game.css';
import { bestMove, checkIfWin, findEmptySpacesInArray, minimax } from './helper';
import GameInfo from './GameInfo';


class Board extends Component {
    state = {
        moves: ['', '', '', '', '', '', '', '', ''],
        nextPlayer: null,
        winner: null,
    };
    players = ['X', 'O'];
    restart = () => {
        this.setState({
            moves: ['', '', '', '', '', '', '', '', ''],
            nextPlayer: null,
            winner: null
        })
    }
    AI = 'X';
    HUMAN = 'O';
    makeMove = (index, player) => {
        if (this.state.winner === null) {
            let nextPlayerTemp = player === this.AI ? this.HUMAN : this.AI;
            const tempArr = [...this.state.moves];
            if (tempArr[index - 1] === '') {
                tempArr[index - 1] = player;
                this.setState({ moves: [...tempArr], nextPlayer: nextPlayerTemp }, async () => {
                    if (!checkIfWin(this.state.moves, player)) {
                        findEmptySpacesInArray(this.state.moves).length > 0 && player === this.HUMAN && this.makeMove(bestMove(tempArr, this.AI).index + 1, this.AI)
                        // this.props.playerStatus(this.state.nextPlayer, null)
                    } else {
                        this.setState({ winner: player })
                    }
                })

            } else {
                alert('Already filled!!')
            }
        }

    }

    render() {
        let i = 1, j = 1;
        const movesArr = this.state.moves.map(element => {
            return <Squares key={i++} index={j++} player={element} makeMove={this.makeMove} ></Squares>
        })
        return (
            <div>
                <div className="board"  >
                    {movesArr}

                </div>
                { (findEmptySpacesInArray(this.state.moves).length === 0 || this.state.winner !== null) && <div style={{ justifyContent: 'center', color: 'black' }}><p>Game over <span className="restartBtn" style={{ color: 'red' }} onClick={this.restart}>Click here to Restart</span></p></div>}
                {findEmptySpacesInArray(this.state.moves).length > 0 &&  this.state.nextPlayer!==null && <GameInfo playerRN={this.state.nextPlayer} winner={this.state.winner} />}
            </div>
        )
    }
}
export default Board;
