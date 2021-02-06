import React, { Component } from 'react'
import Board from './Board'
import GameInfo from './GameInfo'

export default class App extends Component {
    state={
        currentPlayer:null
    }
    checkCurrentPlayer = (player) => {
        this.setState({currentPlayer:player})
    }
    render() {
        return (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                Tic-Tac-Toe
                <div className="" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <Board playerStatus={this.checkCurrentPlayer} />
                </div>
                <GameInfo playerRN={this.state.currentPlayer} />
            </div>
        )

    }
}
