/**
 *  
 * 请求数据的工具类
 */
import axios from 'axios';

class MUtil{
	reqeust(config){
		return new Promise((resolve,reject)=>{
			//创建axios实例，把基本的配置放进去
	       const instance = axios.create({
	            //定义请求文件类型 json
	           	headers:{
	              'Content-Type': 'application/json',
	            },      
	            timeout: 3000,
	            //定义请求根目录
	            // baseURL: 'http://www.xxx.com/'
	            // `url` 是用于请求的服务器 URL
 				url: 	config.url 	  || '',
				// `method` 是创建请求时使用的方法
				method: config.type   || 'get', // 默认是 get
  				params: config.data   || null,
				// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  				// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  				// baseURL: 'https://some-domain.com/api/',
	        });

       		//请求成功后执行的函数
	        instance(config).then(res =>{
	            console.log('res.data',res.data);
            	if(res.data.status === 0){//数据请求成功
					typeof resolve ==='function' && resolve(res.data.data,res.data.msg);
				}else if(10 === res.data.status){  //未登录 
					this.doLogin();
				}else{
					typeof resolve ==='function' && resolve(res.data.msg || res.data.data);
				}
	        //失败后执行的函数
	        }).catch(err => {
	            console.log(err.data);
	            typeof reject === 'function' && reject(err.data.statusText);
	        });
		});
	}
	//跳转登录
	doLogin(){
		window.location.href= '/login?redirect=' + encodeURIComponent(window.location.pathname);
	}
	//获得请求参数Url  getParamUrl('参数名1')
	getParamUrl(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	} 
	//错误消息提示
	errorTips(errMsg){
		alert(errMsg || '出错啦~');
	}
	//本地存储设置信息
	setStorage(name,data){
		let dataType = typeof data;
		if(dataType === 'object'){
			window.localStorage.setItem(name,JSON.stringify(data));
		}else if(['number','string','boolean'].indexOf(dataType) >= 0){
			window.localStorage.setItem(name,data);
		}else{
			alert('不支持的本地存储类型');
		}
	}
	//取出存储内容
	getStorage(name){
		let data = window.localStorage.getItem(name);
		if(data){
			return JSON.parse(data);
		}else{
			return '';
		}
	}
	//删除本地存储
	rmStorage(name){
		window.localStorage.removeItem(name);
	}
}

export default MUtil;