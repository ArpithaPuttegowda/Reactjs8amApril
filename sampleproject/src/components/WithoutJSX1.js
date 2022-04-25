import {Component, createElement} from "react";

export class WithoutJSX1 extends Component {
  render() {
    const location = "MUMBAI";
    return createElement("div", null, createElement(Child, {loc: location}));
  }
}

export default WithoutJSX1;

class Child extends Component {
  render() {
    return createElement("div", null, this.props.loc);
  }
}
