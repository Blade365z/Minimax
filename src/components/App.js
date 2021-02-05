import React, { Component } from 'react'
import Board from './Board'

export default class App extends Component {
  
    render() {
        return (
            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                Tic-Tac-Toe
                <div className="" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <Board  />
                </div>
            </div>
        )

    }
}
