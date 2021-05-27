import React, { Component } from "react";
import Show from "./Show";
 
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      typeValue: "",
      items: []
    };
  }
  
  handleInput = (typedValue) =>{
    this.setState({
      typeValue: typedValue
    })
  }
  addItem = (e) =>{
    var typevalue2= this.state.typeValue
    console.log(typevalue2)
    this.setState({
      items: [...this.state.items, 
        {
          id: Date.now(),
          list: typevalue2
        }
      ],
      typeValue: ""
    })
  }
  deleteItem = (ele) =>{
    console.log(ele)
    this.setState({
      items: this.state.items.filter(e => e.id !== ele.id )
    })
  }

  render() {
    console.log(this.state.typeValue)
    console.log(this.state.items)
    
    return (
      <div className="todoListMain">
        <div className="header">
          <input value={this.state.typeValue} 
            onChange={(e) => this.handleInput(e.target.value)}
          ></input>
          <button onClick={this.addItem}>ADD</button>
        </div>
        <Show 
          items={this.state.items} 
          deleteItem = {this.deleteItem}
          />
      </div>
    );
  }
}
export default TodoList;