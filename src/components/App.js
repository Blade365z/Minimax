import React, { Component } from 'react'
import Board from './Board'
import GameInfo from './GameInfo'

export default class App extends Component {
    state={
        currentPlayer:null,
        won:null
    }
    checkCurrentPlayer = (player,won=null) => {
        this.setState({currentPlayer:player})
        if(won){
        this.setState({won:won})
        }
    }
    render() {
        return (
            <div  className="ui container" style={{ justifyContent: 'center', textAlign: 'center',paddingTop:'30px'  }}>
                <p> Unbeatable Tic-Tac-Toe </p>
                <div  style={{ display: 'flex', justifyContent: 'center', position: 'relative'  }}>
                    <Board playerStatus={this.checkCurrentPlayer} />
                </div>
                <GameInfo playerRN={this.state.currentPlayer}  winner={this.state.won} />
            </div>
        )

    }
}
