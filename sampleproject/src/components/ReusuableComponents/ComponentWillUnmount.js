import React, {Component} from "react";

export default class Parent extends Component {
  state = {
    isChild: false
  };
  fnClick = () => {
    this.setState({
      isChild: !this.state.isChild
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.fnClick}>mount/unmount</button>
        {this.state.isChild && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("I'm unmouting");
    clearInterval(this.myId);
  }
  render() {
    return <div>Child</div>;
  }
  componentDidMount() {
    this.myId = setInterval(() => {
      console.log(123);
    }, 5000);
  }
}
