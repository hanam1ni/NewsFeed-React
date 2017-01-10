import React,{Component} from 'react'

class NewsFocus extends Component{
	constructor(props){
		super(props);

		this.onClickUnFocus = this.onClickUnFocus.bind(this);		
	}

	onClickUnFocus(){
		this.props.onNewsUnFocus();
	}

	render(){
		return(
			<div className="NewsFocus-Content">
				<div className="NewsFocus-Topic">
					{this.props.info.topic}
				</div>
				<div className="BackBtn">
					<button className="NewsFocus-BackBtn" onClick={this.onClickUnFocus}>X</button>
				</div>
				<div className="NewsFocus-Detail">
					<img className="NewsFocus-Img" src={this.props.info.url} />
					<br/>Britain's exit from the EU - has left a sea of confusion in its frothy wake. Here is a quick look at some of the current key questions yet to be answered following Thursday's referendum.
					<h1>When is the UK leaving? Why hasn't it left already?</h1>
					For the UK to leave the EU, it has to formally invoke an agreement called Article 50 of the Lisbon Treaty. No country has ever left the EU, so Article 50 is untested.
					Once Article 50 has been invoked in a letter or a speech, the formal process of withdrawing from the EU can begin, at which point the UK has two years to negotiate its withdrawal with the other member states. Extricating the UK from the EU will be extremely complex, and the process could drag on longer than that.
					In his statement after the results of the referendum, UK Prime Minister David Cameron - who backed Remain - said he would resign in October and leave it to his successor to decide when to trigger Article 50.
					Leave campaigners say they want informal discussions with the EU first, but the foreign ministers of France and Germany have called for Article 50 to be triggered as soon as possible to avoid prolonging a period of uncertainty.
				</div>
			</div>
		)
	}

}

export default NewsFocus;