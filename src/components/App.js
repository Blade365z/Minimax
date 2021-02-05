import React, { Component } from 'react'
import Board from './Board'

export default class App extends Component {
    state = {
        moves:[null,null,null,null,null,null,null,null,null]
    };

    render() {
        return (
            <div className="ui container" style={{display:'flex',margin:'50px'}}>
                <Board moveArr={this.state.moves}/>
            </div>
        )
    }
}
