import React,{Component} from 'react'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'

class App extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<div className="row">
					<Navbar />
				</div>
				<div className="row">
					<Content />
				</div>
			</div>
		);
	}
}

export default App;