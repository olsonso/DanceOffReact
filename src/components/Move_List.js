import React,  {Component}from 'react';
import RaisedButton from './button';

function handleClick(props) {
	alert("you always win");
}

const Move = ({symbol})=> {
	const style = {
		backgroundImage: "url(./public/img/" + symbol + ".png)"
	}
	return(
		<button2 style = {style}  onClick={handleClick}/>
		)
	}

	class MoveList extends Component{

		constructor(props) {
			super(props)
			this.symbol = ["thriller", "disco", "breakdance", "chicken", "moonwalk"]
			this.state = {}
		}

		runGame = () => {
			this.setState({
				Thriller: this.symbol[0],
				Disco: this.symbol[1],
				Breakdance: this.symbol[2],
				Chicken: this.symbol[3],
				Moonwalk: this.symbol[4]
			})
		}


		render() {
			return (
			<div className= "game1">
			<div className="circle-container">
			<div className= "game-item">
			<Move symbol={this.state.Thriller} />
			<Move symbol={this.state.Disco}   />
			<Move symbol={this.state.Breakdance}   />
			<Move symbol={this.state.Chicken}   />
			<Move symbol={this.state.Moonwalk}   />
			</div>
			</div>
			<div class="font-icon-wrapper" onClick={this.runGame}>
			<center>
			<RaisedButton/> 
			</center>
			</div>
			</div>

			);
		}

	}

	export default MoveList;