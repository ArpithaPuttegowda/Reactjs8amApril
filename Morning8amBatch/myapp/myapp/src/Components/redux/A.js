import React, {Component, createRef} from "react";
import store from "../../store/store";

export default class A extends Component {
  constructor() {
    super();
    this.myRef = createRef(null);
  }
  handleClick = () => {
    debugger;
    let name = this.myRef.current.value;
    store.dispatch({
      type: "NAME",
      payload: name
    });
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>Name</button>
      </div>
    );
  }
}
