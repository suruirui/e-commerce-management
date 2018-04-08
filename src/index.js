import React , { Component } from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter as Router,Route,Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';

//页面
import Home from './page/home/index'
import Login from './page/login/index'
import Goods from './page/goods/index'
import Category from './page/category/index'
import Order from './page/order/index'
import UserList from './page/userList/index'
import ErrorPage from './page/error/index'
import Layout from './component/layout/index'
class App extends Component{
	render(){
		return (
			<Router>
				<Switch>
					<Route path="/login" component={Login}/>
					<Route path="/" render={ props => (
						<Layout>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route path="/goods" component={Goods}/>
								<Route path="/category" component={Category}/>
								<Route path="/order" component={Order}/>
								<Route path="/userList" component={UserList}/>
								<Route component={ErrorPage}/>  {/*以上路径都不匹配跳转error页面*/}
								<Redirect from="*" to="/"/>
							</Switch>
						</Layout>
					)}/>
				</Switch>
			</Router>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//以下为router demo
// class Home extends Component {
//   render() {
//     return (
//       <div>首页...</div>
//     );
//   }
// }

// class News extends Component {
//   render() {
//     return (
//       <div>
//       	新闻列表
//       	参数id是:{this.props.match.params.id}
//       	<Switch>
//       		<Route exact path={`${this.props.match.path}`} render={(route)=>{
// 				return <div>当前组件是不带参数的News，参数是:{route.match.params.id}</div>
// 			}}/>
// 			<Route path={`${this.props.match.path}/:id`} render={(route)=>{
// 				return <div>当前组件是带参数的News，参数是:{route.match.params.id}</div>
// 			}}/>
//       	</Switch>
//       </div>
//     );
//   }
// }

// class Index extends Component {
//   render() {
//     return (
//       <div>
//       	<Link to="/home">首页</Link>
//       	<br/>
//       	<Link to="/news">新闻动态</Link>
//       	<br/>	
//       	<Link to="/news/100">带参数的新闻动态(单条新闻记录)</Link>
//       	{this.props.children}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
// 	<Router>
// 		<Index>
// 			<Route path="/home" component={Home}/>
// 			<Route path="/news" component={News}/>
// 			<Route path="/news/:id" component={News}/>
// 		</Index>
// 	</Router>, document.getElementById('root'));


