import React from 'react'

 class Squares extends React.Component {
    state={
        player:null
    }
     updateSquare=()=>{
        this.setState({player:'X'})
    }
    render(){
        return (
            <div className="">
                <div className="ui card" style={{borderRadius:'0',border:'0.5px solid',height:'100px',width:'100px',textAlign:'center',fontSize:'50px',paddingTop:'40%',cursor:'pointer'}} onClick={this.updateSquare}>{this.state.player}</div>
            </div>
        )
    }
}

export default Squares;