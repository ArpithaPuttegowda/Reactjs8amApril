import React, {Component} from "react";
import A from "./A";
import B from "./B";
import C from "./C";

class MyReduxExample extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      loc: ""
    };
  }
  getName = (data) => {
    this.setState({
      name: data
    });
  };
  getLocation = (data) => {
    this.setState({
      loc: data
    });
  };
  render() {
    return (
      <div>
        <A fn={this.getName} />
        <B fn={this.getLocation} />
        <C name={this.state.name} l={this.state.loc} />
      </div>
    );
  }
}

export default MyReduxExample;
