import React from 'react'

class Squares extends React.Component {
    makeMoveAndCallback = () => {
        this.props.makeMove(this.props.index)
    }
    render() {
        return (
            <div className=" square-tictac">
                <div className="ui card" style={{ borderRadius: '0', border: '0.5px solid', height: '100px', width: '100px', textAlign: 'center', fontSize: '50px', paddingTop: '40%', cursor: 'pointer' }} onClick={this.makeMoveAndCallback}>{this.props.player}</div>
            </div>
        )
    }
}

export default Squares;