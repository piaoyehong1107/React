import React, { Component, useState } from "react";
import Show from "./Show";
 
function TodoList () {

  const[typevalue, setType] = useState("");
  const[items,setItems] = useState([]);
  // constructor(props){
  //   super(props);
  //   this.state={
  //     typeValue: "",
  //     items: []
  //   };
  // }
  
  // handleInput = (typedValue) =>{
  //   setType(typedValue)
  //   // this.setState({
  //   //   typeValue: typedValue
  //   // })
  // }
  // addItem = (e) =>{
  //   var typevalue2= this.state.typeValue
  //   // console.log(typevalue2)
  //   this.setState({
  //     items: [...this.state.items, 
  //       {
  //         id: Date.now(),
  //         list: typevalue2
  //       }
  //     ],
  //     typeValue: ""
  //   })
  // }
  // deleteItem = (ele) =>{
  //   console.log(ele)
  //   this.setState({
  //     items: this.state.items.filter(e => e.id !== ele.id )
  //   })
  // }
    
    return (
      <div className="todoListMain">
        <div className="header">
          <input value={this.state.typeValue} 
            onChange={(e) => setType(e.target.value)}
          ></input>
          <button onClick={setItems(
            [...this.state.items,
              {
                id: Date.now(),
                list: typevalue
              }
            ]
          )} >ADD</button>
        </div>
        <Show 
          items={this.state.items} 
          deleteItem = {this.deleteItem}
          />
      </div>
    );
}
export default TodoList
