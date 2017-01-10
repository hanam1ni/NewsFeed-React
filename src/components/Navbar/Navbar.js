import React,{Component} from 'react'

class Navbar extends Component {
	constructor(props){
		super(props)

	}

	render(){
		return(
			<div className="Navbar">
				<ul>
					<li className="Navbar-Name">myWebsite</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;