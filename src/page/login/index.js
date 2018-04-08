import React , { Component } from 'react';
import MUtil from '../../utils/mm'
import User from '../../service/UserService'

import './login-form.css';
import './login.css';

const _mm = new MUtil();
const _user = new User();

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:''
		}
	}
	componentWillMount(){  //设置登录页面title
		document.title = '登录 - 电商后台管理系统';
	}
	//当用户名或密码发生改变
	onInputChange(e){
		let inputVal = e.target.value,
			 inputName = e.target.name;
		this.setState({
			[inputName]:inputVal    //es6支持key为变量写在[]中
		});
	}
	//提交用户名和密码
	onSubmit(){
		let loginInfo = {
			username:this.state.username,
			password:this.state.password,
			redirect:_mm.getParamUrl('redirect') || ''
		},
		checkRes = _user.checkLoginInfo(loginInfo);
		console.log(checkRes)
		if(checkRes.status){//验证通过
			_user.login(loginInfo).then((res)=>{
				//本地存储保存用户信息
				_mm.setStorage('userInfo',res);
				//登录成功的操作  ??有问题
				this.props.history.push('/'); //登录成功调回原来页面
			},(errMsg)=>{
				_mm.errorTips(checkRes.msg); 
			});
		}else{//验证不通过
			_mm.errorTips(checkRes.msg); 
		}
	}
	render(){
		return (
				<div className="top-content">
	            <div className="inner-bg">
	                <div className="container">
	                    <div className="row">
	                        <div className="col-sm-6 col-sm-offset-3 form-box">
	                        	<div className="form-top">
	                        		<div className="form-top-left">
	                        			<h3>电商后台管理系统</h3>
	                        		</div>
	                        		<div className="form-top-right">
	                        			<i className="fa fa-key"></i>
	                        		</div>
	                            </div>
	                            <div className="form-bottom">
			                    	<div className="form-group">
			                    		<label className="sr-only" htmlFor="form-username">用户名：</label>
			                        	<input type="text" 
			                        	 name="username"
			                        	  placeholder="请输入用户名" 
			                        	  className="form-username form-control"
			                        	  onChange={e=>this.onInputChange(e)} />
			                        </div>
			                        <div className="form-group">
			                        	<label className="sr-only" htmlFor="form-password">密码：</label>
			                        	<input type="password"
			                        	 name="password"
			                        	  placeholder="请输入密码" 
			                        	  className="form-password form-control"
			                        	  onChange={e=>this.onInputChange(e)} />
			                        </div>
			                        <button className="btn btn-primary btn-block"
			                        onClick={e => {this.onSubmit()}}>登录</button>
			                    </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
}

export default Login;