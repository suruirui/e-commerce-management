import React,{Component} from 'react';


class PageTitle extends Component{
	// constructor(props){
	// 	super(props);
	// }

	render(){
		return(
			<div>
				<h1 className="page-header">{this.props.title}</h1>
				{this.props.children}
			</div>
		)
	}
}

export default PageTitle;