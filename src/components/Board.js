import React, { Component } from 'react'
import Squares from './Squares'

class Board extends Component {
    render() {
        const movesArr = this.props.moveArr.map(element => {
            return <Squares player={element}></Squares> 
        })
        return (
            <div>
                {movesArr}
            </div>
        )
    }
}
export default Board;
