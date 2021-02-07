import React, { Component } from 'react'
import Board from './Board'
import GameInfo from './GameInfo'

export default class App extends Component {
  
    render() {
        return (
            <div  className="ui container" style={{ justifyContent: 'center', textAlign: 'center',paddingTop:'30px'  }}>
                <p> Unbeatable Tic-Tac-Toe </p>
                <div  style={{ display: 'flex', justifyContent: 'center', position: 'relative'  }}>
                    <Board />
                </div>
                <div style={{paddingTop:'50px'}}> 
                    <small style={{margin:'0'}}>Made with <span style={{color:'red',fontSize:'1.4em',paddingTop:'10'}}> ❤ </span> by blade</small> 
                </div>
            </div>
        )

    }
}
