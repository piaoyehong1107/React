import React, { Component } from "react";

 
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
  addItem = () =>{
    var typevalue2= this.state.typeValue
    console.log(typevalue2)
    this.setState({
      items: [...this.state.items, typevalue2]
    })
  }

  render() {
    console.log(this.state.typeValue)
    console.log(this.state.items)
    
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="enter task" 
              onChange={(e) => this.handleInput(e.target.value)}
            ></input>
            <button onClick={this.addItem}>ADD</button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoList;