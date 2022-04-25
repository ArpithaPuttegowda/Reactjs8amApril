import React, {Component} from "react";

export class TakingTheREf3 extends Component {
  constructor() {
    super();
    this.data = {};
  }
  handleChange = (eve) => {
    let myId = eve.target.id;
    let val = eve.target.value;
    this.data = {...this.data, [myId]: val};
    console.log(this.data);
  };
  render() {
    return (
      <div>
        <p>
          <em>N1:</em> <input id="n1" onChange={this.handleChange} />
        </p>
        <p>
          <em>N2:</em>
          <input id="n2" onChange={this.handleChange} />
        </p>
        <p>
          <em>N3:</em>
          <input id="n3" onChange={this.handleChange} />
        </p>
        <p>
          <em>N4:</em>
          <input id="n4" onChange={this.handleChange} />
        </p>
        <p>
          <button onClick={this.onSum}>Sum</button>
        </p>
      </div>
    );
  }
}

export default TakingTheREf3;
