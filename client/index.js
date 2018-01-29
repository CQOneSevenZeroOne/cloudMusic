import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import "weui";
//引入容器组件
import Xindex from "./contatiner/xindex.jsx";
import Xlogin from "./contatiner/xlogin.jsx";
//react-redux配置
import {Provider} from "react-redux";
import {createStore} from "redux";
var initalState={
	account:"",
	password:""
}
const store = createStore((state=initalState,action)=>{
	 switch(action.type){
	 	case "changename":
	 	  return Object.assign({}, state, {//既继承原来的值又替换新值
            	account:"aa",
            	password:""
          	})
	 	  break;
	 	  default:
	 	  return state
	 }
})

ReactDOM.render(
	<Provider store={store}>
	<Router>
		 <div>
              <Route path="/index" component={Xindex}></Route>
              <Route path="/login" component={Xlogin}></Route>
		 </div>
	 </Router>
	</Provider>
	,document.getElementById("app"))