import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import MoveList from './components/Move_List';
import Scores from './components/Score';
import Header from './Components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component { 
	constructor() {
		super();
		}
	

	render() {
		return (
			<MuiThemeProvider>
			<div>
				<Header />
				<div>
				<div className="game">
					<MoveList/>	
					<Scores/>
				</div>
		</div>
	
		</div>
		</MuiThemeProvider>
		
		);
	}
}


ReactDOM.render(<App/>, document.querySelector('.container'));