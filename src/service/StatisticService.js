import MUtil from '../utils/mm.js'

const _mm = new MUtil();

class Statistic{
	getHomeCount(){
		return _mm.reqeust({
			url:'/manage/statistic/base_count.do'
		});
	}
}
export default Statistic;