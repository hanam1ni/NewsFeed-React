import React,{Component} from 'react'
import Heading from './Heading'
import NewsFeed from './NewsFeed'
import Subscribe from './Subscribe'

class Content extends Component {
	constructor(props){
		super(props)

	}

	render(){
		return(
			<div>
				<Heading />
				<NewsFeed />
				<Subscribe />
			</div>
		);
	}
}

export default Content;