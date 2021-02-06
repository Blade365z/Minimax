import React from 'react';

class GameInfo extends React.Component {
    render() {
        return (<div>
            {this.props.playerRN && <p  style={{margin:'0'}}>Game Info: </p> }
            {this.props.playerRN && <p style={{margin:'0'}}>Next player is: {this.props.playerRN} </p>}
            {this.props.winner && <h3 style={{margin:'0'}}><b style={{color:'red',marginRight:'4px'}}>{this.props.winner}</b> is the winner !!</h3>}
        </div>
        );
    }
}
export default GameInfo;