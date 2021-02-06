import React from 'react';

class GameInfo extends React.Component {
    render() {
        return (<div>
            Game Info
            {this.props.playerRN && <p>Current player is: {this.props.playerRN} </p>}
        </div>
        );
    }
}
export default GameInfo;