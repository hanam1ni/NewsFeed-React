import React,{Component} from 'react'

class Subcribe extends Component{
	constructor(props){
		super(props)

	}

	render(){
		return(
			<div className="Subscribe-Container">
				<h1>Subscribe</h1>
				<div className="Form-Container">
					<input placeholder="E-Mail Address"/><button>Submit</button>
				</div>
			</div>
		);
	}
}

export default Subcribe;