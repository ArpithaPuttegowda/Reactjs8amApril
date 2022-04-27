import React, {Component} from "react";

export default class GetElementRefOnChange extends Component {
  constructor() {
    super();
    this.data = {};
  }
  handleChange = (e) => {
    let key = e.target.id;
    let val = e.target.value;
    this.data = {
      ...this.data,
      [key]: val
    };
  };
  handleClick = () => {
    console.log(this.data, "data");
  };
  render() {
    return (
      <div>
        <p>
          <b>Name:</b> <input id="name" onChange={this.handleChange} />
        </p>
        <p>
          <b>Password:</b> <input id="pwd" onChange={this.handleChange} />
        </p>
        <p>
          <b>Email:</b> <input id="email" onChange={this.handleChange} />
        </p>
        <p>
          <b>Phone no:</b>
          <input id="phoneNumber" onChange={this.handleChange} />
        </p>
        <p>
          <button onClick={this.handleClick}>Registration</button>
        </p>
      </div>
    );
  }
}
