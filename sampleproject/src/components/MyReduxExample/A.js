import React, {Component} from "react";

class A extends Component {
  handleName = () => {
    let name = this.refs.name.value;
    this.props.fn(name);
  };
  render() {
    return (
      <div>
        <b>Name</b>
        <input ref="name" />
        <button onClick={this.handleName}>SetName</button>
      </div>
    );
  }
}

export default A;
