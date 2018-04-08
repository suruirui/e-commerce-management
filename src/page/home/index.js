import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../../component/page-title/index'

import MUtil from '../../utils/mm'
import Statistic from '../../service/StatisticService'

const _mm = new MUtil();
const _statistic = new Statistic();

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			userCount:'-',
			productCount:'-',
			orderCount:'-'
		}
	}

	componentDidMount(){
		this.loadCount();
	}
	//获取统计数据
	loadCount(){
		//通过service底层封装请求数据
		_statistic.getHomeCount().then(res=>{
			this.setState(res);
		},errMsg=>{
			_mm.errorTips(errMsg);
		});
	}
	render(){
		return(
			<div id="page-wrapper">
				<PageTitle title="首页" />
				<div className="row">
                    <div className="col-md-4">
                    	<Link to="/user">
	                        <div className="panel panel-primary text-center no-boder blue">
	                            <div className="panel-left pull-left blue">
	                                <i className="fa fa-user-o fa-5x"></i>
	                            </div>
	                            <div className="panel-right">
									<h3>{this.state.userCount}</h3>
	                               <strong>用户总数</strong>
	                            </div>
	                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                    	<Link to="/goods">
	                        <div className="panel panel-primary text-center no-boder blue">
	                              <div className="panel-left pull-left blue">
	                                <i className="fa fa-cubes fa-5x"></i>
									</div>
	                            <div className="panel-right">
									<h3>{this.state.productCount}</h3>
	                               <strong> 商品总数</strong>
	                            </div>
	                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                    	<Link to="/order">
	                        <div className="panel panel-primary text-center no-boder blue">
	                            <div className="panel-left pull-left blue">
	                                <i className="fa fa fa-wifi fa-5x"></i>
	                            </div>
	                            <div className="panel-right">
								   <h3>{this.state.orderCount}</h3>
	                               <strong> 订单总数 </strong>
	                            </div>
	                        </div>
	                    </Link>
                    </div>
                </div>
			</div>
		);
	}
}

export default Home;