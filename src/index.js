import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import MoveList from './components/Move_List';
import AppBarHeader from './components/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component { 
	constructor(props) {
		super(props);
	}

	render(){
		return (
		<MuiThemeProvider>
		<div>
		<AppBarHeader/>
		<div>
		<div className="game">
			<MoveList/>
			</div>	
			</div>
		</div>
		</MuiThemeProvider>
		
		);
	}
}


ReactDOM.render(<App/>, document.querySelector('.container'));