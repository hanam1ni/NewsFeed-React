import React,{Component} from 'react'
import ReactAddons from 'react-addons'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NewsItem from './NewsItem'
import NewsFocus from './NewsFocus'
import gsapb from 'gsap'
import GSAP from 'react-gsap-enhancer'

class NewsFeed extends Component{
	constructor(props){
		super(props);

		this.state = {
			news: [{topic:'UK science wakes up to new future',detail:'',url:'../../static/news1.jpg'},
			{topic:'Solar plane completes Atlantic crossing',detail:'',url:'../../static/news2.jpg'},
			{topic:'Surge in searches on Irish passports, says Google',detail:'',url:'../../static/news3.jpg'},
			{topic:'UK tech sector reacts to Leave vote',detail:'',url:'../../static/news4.jpg'},
			{topic:'Diesels more polluting below 18C, research suggests',detail:'',url:'../../static/news5.jpg'},
			{topic:'Uber to hide surge pricing notifications',detail:'',url:'../../static/news6.jpg'},
			{topic:'France and Germany in agreement over UKs EU exit',detail:'',url:'../../static/news7.jpg'},
			{topic:'How one man took on Wall Street and won',detail:'',url:'../../static/news8.jpg'},
			{topic:'The story of India as told by a humble street snack',detail:'',url:'../../static/news9.jpg'}],
			focus: false,
			newsfocus: ''
		};

		this.animateNews = this.animateNews.bind(this);
	}

	onNewsFocus(news){	
		this.animateNews();
 		this.setState({focus: true});
 		this.setState({newsfocus: news});
	}

	onNewsUnFocus(){
		this.animateNews();
		this.setState({focus: false});
	}

	animateNew({target}){
		let fade = target.find({
			id: 'newsFade'
		})

		return new TimelineMax().
		to(fade , 0.25, {opacity: 1}).
		to(fade , 0.25, {opacity: 0})
	}

	animateNews(){
		console.log("animated");
		this.anim = this.addAnimation(this.animateNew);
	}

	renderNews(){
		if(!this.state.focus){
			return this.state.news.map((val,i)=>{
				return(
					<li key={i} >
	                        <NewsItem info={val} onNewsFocus={(val)=>{this.onNewsFocus(val)}} />
	                </li>
				)
			})
		}else{
			return(
				<div className="NewsFocus-Container">
					<NewsFocus info={this.state.newsfocus} onNewsUnFocus={()=>{this.onNewsUnFocus()}} />
				</div>
			)
		}
	}

	render(){
		return(
			<div className="NewsFeed-Container">
				<div className="NewsFeed-Heading">
					News
				</div>
				<div className="NewsFeed-Content">
					<div id="parFeed" className="NewsFeed-BG">
					</div>
					<div id="newsFade" className="NewsFeed-Fade">
					</div>
					<ul>
						{this.renderNews()}
					</ul>
				</div>
			</div>
		);
	}
}

export default GSAP()(NewsFeed);