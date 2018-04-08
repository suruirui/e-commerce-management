import MUtil from '../utils/mm.js'


const _mm = new MUtil();
class User{
	login(loginInfo){
		return _mm.reqeust({
			type:'post',
			url:'/manage/user/login.do',
			data:loginInfo
		});
	}
	//登录校验
	checkLoginInfo(loginInfo){
		let username = loginInfo.username.trim(),
		    password = loginInfo.password.trim();
		//用户名和密码不为空
		if(typeof username !== 'string' || username.length === 0){
			return {
				status:false,
				msg:'用户名不能为空!'
			}
		}
		if(typeof password !== 'string' || password.length === 0){
			return {
				status:false,
				msg:'密码不能为空!'
			}
		}
		return {
			status:true,
			msg:'验证通过'
		}
	}
	//退出登录
	logout(){
		return _mm.reqeust({
			type:'post',
			url:'/user/logout.do'
		});
	}
	//获取用户列表
	getList(pageInfo){
		return _mm.reqeust({
			type:'post',
			url:'/user/list.do',
			data:pageInfo
		});
	}
}
export default User;