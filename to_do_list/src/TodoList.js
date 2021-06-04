import React, { Component, useState } from "react";
import Show from "./Show";
import { v4 } from 'uuid'

function TodoList() {

  const [typeValue, setType] = useState("");
  const [items, setItems] = useState([]);
  console.log(items)
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
  const deleteItem = (e) => {
    console.log(e)
    setItems(items.filter(item => item.id !== e.id))
    // this.setState({
    //   items: this.state.items.filter(e => e.id !== ele.id)
    // })
  }

  const handleClick = () => {
    setItems(
      [...items,
      {
        id: v4(),
        list: typeValue
      }
      ]
    )
    setType('')
  }

  return (
    <div className="todoListMain">
      <div className="header">
        <input
          value={typeValue}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <button onClick={handleClick} >ADD</button>
      </div>
      <Show
        items={items}
        deleteItem={deleteItem}
      />
    </div>
  );
}
export default TodoList
