import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import './theme.css'
class SideNav extends Component{
	// constructor(props){
	// 	super(props);
	// }

	render(){
		return(
			<div>
				<nav className="navbar-default navbar-side" role="navigation">
	            <div className="sidebar-collapse">
	                <ul className="nav" id="main-menu">
	                    <li>
	                        <Link className="active-menu" to="/"><i className="fa fa-dashboard"></i> 首页</Link>
	                    </li>
	                    <li>
	                        <a href="javascript:;"><i className="fa fa-cubes"></i>商品</a>
	                         <ul className="nav nav-second-level collapse">
	                            <li>
	                                <Link to="/goods">商品管理</Link>
	                            </li>
	                            <li>
	                                <Link to="/category">品类管理</Link>
	                            </li>
	                         </ul>
	                    </li>
						<li>
	                        <a href="javascript:;"><i className="fa fa-wifi"></i> 订单</a>
	                         <ul className="nav nav-second-level collapse">
	                            <li>
	                            	<Link to="/order">订单管理</Link>
	                            </li>
	                         </ul>
	                    </li>
	                    <li>
	                        <a href="javascript:;"><i className="fa fa-user-o"></i> 用户</a>
	                         <ul className="nav nav-second-level collapse">
	                            <li>
	                            	<Link to="/userList">用户管理</Link>
	                            </li>
	                         </ul>
	                    </li>
	                </ul>
	            </div>
	        </nav>	
			</div>
		);
	}
}

export default SideNav;