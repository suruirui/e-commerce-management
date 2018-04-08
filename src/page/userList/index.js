import React , { Component } from 'react';
import PageTitle from '../../component/page-title/index'

import MUtil from '../../utils/mm'
import User from '../../service/UserService'

const _mm = new MUtil();
const _user = new User();

class UserList extends Component{
	constructor(props){
		super(props);
		this.state = {
			id:'-',
			userName:'-',
			email:'-',
			phone:'-'
		}
	}
	componentDidMount(){
		// this.loadUsers();
	}

	loadUsers(){
		let pageInfo = {pageSize:10,pageNum:1}; //????
		_user.getList(pageInfo).then(res=>{
			this.setState(res);
		},errMsg=>{
			_mm.errorTips(errMsg);
		});
	}
	render(){
		return(
			<div id="page-wrapper">
				<PageTitle title="用户管理" />
				<div className="row">
					<div className="col-md-12">
						<table className="table table-striped">
							<tr>
								<th>id</th>
								<th>用户名</th>
								<th>邮箱</th>
								<th>手机号</th>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default UserList;