import React, { Component } from "react";

 
class Show extends Component {
  
  render() {
    return (
      <div className="showListMain">
        <div className="header">
            {this.props.items.map(ele=>(
                <li>
                    {ele.list} <button onClick={()=>this.props.deleteItem(ele)}>DELETE</button>
                    </li>
            ))}
        </div>
      </div>
    );
  }
}
export default Show;