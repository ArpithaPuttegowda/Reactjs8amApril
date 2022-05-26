import React, {Component, createRef} from "react";
import store from "../../store/store";

export default class B extends Component {
  constructor() {
    super();
    this.myRef = createRef(null);
  }
  handleLocation = () => {
    let loc = this.myRef.current.value;
    store.dispatch({
      type: "LOC",
      payload: loc
    });
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleLocation}>Location</button>
      </div>
    );
  }
}
