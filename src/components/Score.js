import React, {Component} from 'react';

class Scores extends Component {
	render(){
		return (
		<div>	
		<center>
			<div className="row">
			  <div className="col-sm-4"><h1>You: 0</h1></div>
			  <div className="col-sm-4"><h1>ScoreBoard</h1></div>
			  <div className="col-sm-4"><h1>Computer: 0</h1></div>
			</div>
		</center>
		</div>
		);
	}
}

export default Scores;