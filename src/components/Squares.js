import React from 'react'

class Squares extends React.Component {
    makeMoveAndCallback = () => {
        this.props.makeMove(this.props.index,'O')
    }
    render() {
        return (
            <div className=" ">
                <div className="ui card square-tictac" style={{ borderRadius: '0', border: '0.5px solid', height: '100px', width: '100px', textAlign: 'center', fontSize: '50px', paddingTop: '40%', cursor: 'pointer' }} onClick={this.makeMoveAndCallback}>{this.props.player}</div>
            </div>
        )
    }
}

export default Squares;