import React, { Component } from "react";
 
class to_do_list extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default to_do_list;