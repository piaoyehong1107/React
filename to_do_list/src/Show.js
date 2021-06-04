import React, { Component } from "react";

function Show({
  items,
  deleteItem
}) {
  return (
    <div className="showListMain">
      <div className="header">
        {items.map(ele => (
          <li>
            {ele.list} <button onClick={() => deleteItem(ele)}>DELETE</button>
          </li>
        ))}
      </div>
    </div>
  );
}
export default Show;