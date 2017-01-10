import React,{Component} from 'react'	

class NewsItem extends Component{
	constructor(props){
		super(props);

		this.onClickFocus = this.onClickFocus.bind(this);
	}

	onClickFocus(){
		this.props.onNewsFocus(this.props.info);
	}

	render(){
		return (
			<div className="NewsFeed-Item" onClick={this.onClickFocus}>
				<div className="NewsItem-Url">
					<img src={this.props.info.url}/>
				</div>
				<div className="NewsItem-Topic">
					{this.props.info.topic}
				</div>
			</div>
		)
	}

}

export default NewsItem;
