import React , { Component } from 'react';

import TopNav from '../top-nav/index'
import SideNav from '../side-nav/index'
import './theme.css'

class Layout extends Component{
	// constructor(props){
	// 	super(props);
	// }

	render(){
		return(
			<div id="wrapper">
				<TopNav/>
				<SideNav/>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;