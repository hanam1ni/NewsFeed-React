import React,{Component} from 'react'

class Heading extends Component{
	constructor(props){
		super(props)

	}

	render(){
		return(
			<div className="Heading-Container">
				<div id="parHead" className="Heading-BG">
				</div>
				<div className="Heading-Head">
					- UptoDate -
				</div>
				<div className="Heading-SubHead">
					Get in Touch with our simple News Feed.
				</div>
			</div>
		);
	}
}

export default Heading;