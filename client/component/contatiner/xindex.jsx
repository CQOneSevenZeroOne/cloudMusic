import React from "react";
import Xheader from "../index/xheader.jsx";
import Xbanner from "../index/xbanner.jsx";
import Xlist from "../index/xlist.jsx";
class Xindex extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
    return(
         <div>
	          <Xheader/>
	          <Xbanner/>
	          <Xlist/>
          </div>
    )
  }

}
export default Xindex;