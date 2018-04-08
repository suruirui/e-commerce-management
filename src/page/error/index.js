import React , { Component } from 'react';

import { Link } from 'react-router-dom';

import PageTitle from '../../component/page-title/index'

class Error extends Component{
	render(){
		return(
			<div id="page-wrapper">
				<PageTitle title="出错啦!"/>
				<div className="row">
					<div className="col-md-4">
						<span>找不到该路径</span>
						<Link to="/">返回首页</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Error;