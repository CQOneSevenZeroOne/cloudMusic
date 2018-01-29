import React from 'react';
import '../css/user_left.css'
import imgsrc from '../images/c_head.jpg'
class Xuser_left extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
	}
	render(){
		return (
			<div id="c_left">
				<header className="c_head">
					<img src={imgsrc} className="c_tou"/>
					<div className="c_box">
						<div className="c_uname">
							<span>陨落星际</span>
							<i>Lv.8</i>
						</div>
						<div className="qiandao">
							签到
						</div>
					</div>
				</header>
				<ul>
					<li>
						
					</li>
				</ul>
			</div>
		)
	}
}
export default Xuser_left;
