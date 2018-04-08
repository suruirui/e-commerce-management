import React , { Component } from 'react';
import MUtil from '../../utils/mm'
import User from '../../service/UserService'

const _mm = new MUtil();
const _user = new User();


class TopNav extends Component{
	constructor(props){
		super(props);
		this.state = {
			username:_mm.getStorage('userInfo').username || ''
		}
	}
	//退出登录
	onLogout(){
		_user.logout().then(res=>{
			_mm.rmStorage('userInfo');
			window.location.href="/login"; //退出之后跳到登录页面
		},errMsg =>{
			_mm.errorTips(errMsg);
		});
	}
	render(){
		return(
			<div>
				<nav className="navbar navbar-default top-navbar" role="navigation">
		            <div className="navbar-header">
		                <a className="navbar-brand" href="/"><strong>电商后台</strong></a>
		            </div>
		            <ul className="nav navbar-top-links navbar-right">
		                <li className="dropdown">
		                	<i className="fa fa-user-circle"></i>&nbsp;&nbsp;
		                    <i className="user-name">
		                    {
		                    	this.state.username
		                    	? <span>欢迎，{this.state.username}</span>
		                    	: <span>欢迎您</span>
		                    }</i>
		                    <a href="javascript:;" className="user-name" onClick={this.onLogout}>
		                    	<i className="fa fa-sign-out"></i>退出登录
		                    </a>
		                </li>
		            </ul>
        		</nav>
			</div>
		);
	}
}

export default TopNav;