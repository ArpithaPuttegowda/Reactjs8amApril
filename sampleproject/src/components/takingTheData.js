import React, {Component} from "react";

export default class TakingTheData extends Component {
  constructor() {
    super();
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  onSum = () => {
    debugger;
    console.log(this);
    // console.log({n1: this.refs.n1.value, n2: this.refs.n2.value});
    console.log(this.myRef1.current.value);
  };
  render() {
    return (
      <div>
        <p>
          <em>N1:</em> <input ref={this.myRef1} />
        </p>
        <p>
          <em>N2:</em>
          <input ref={this.myRef2} />
        </p>
        <p>
          <button onClick={this.onSum}>Sum</button>
        </p>
      </div>
    );
  }
}
