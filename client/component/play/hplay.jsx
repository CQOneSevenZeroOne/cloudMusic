import React from 'react';
import '../../css/hplay.css'
import '../../iconfont/iconfont.css'
class Hplay extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="hplay">
			<header>
				<div className="box">
					<a href="javascript:">←</a>
					<div id="music">
						<p className="mname">剩下了自己</p>
						<p className="singer">张韶涵</p>
					</div>
				</div>
				<div className="iconfont icon-iconfontzhizuobiaozhun20
 fenxiang"></div>
			</header>
			<div className="content">
				<div className="pic">
					<img src=""/>
				</div>
				<ul>
					<li>
						<a href="javascript:" className="iconfont icon-xin"></a>
					</li>
					<li>
						<a href="javascript:" className="iconfont icon-xiazai2"></a>
					</li>
					<li>
						<a href="javascript:" className="iconfont icon-buoumaotubiao48"></a>
					</li>
					<li>
						<a href="javascript:" className="iconfont icon-gengduo-shuxiang"></a>
					</li>
				</ul>
			</div>
			<div id="time">
				<span className="time">00:00</span>
				<div className="tiao"><span></span></div>
				<span className="time">04:04</span>
			</div>
			<footer>
				<ul>
					<li><a href="javascript:"><img src="../client/images/loop.png"/></a></li>
					<li><a href="javascript:"><img src="../client/images/previous.png"/></a></li>
					<li><a href="javascript:"><img src="../client/images/play.png"/></a></li>
					<li><a href="javascript:"><img src="../client/images/next.png"/></a></li>
					<li><a href="javascript:"><img src="../client/images/list.png"/></a></li>
				</ul>
			</footer>
		</div>
		)
	}
}
export default Hplay;