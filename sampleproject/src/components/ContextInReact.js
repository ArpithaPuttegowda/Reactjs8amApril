import React, {Component} from "react";

export default class ContextInReact extends Component {
  render() {
    const myData = "Hyderabad";
    return (
      <div>
        <A data={myData} />
      </div>
    );
  }
}

class A extends Component {
  render() {
    return (
      <div>
        <B d={this.props.data} />
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <C myData={this.props.d} />
      </div>
    );
  }
}

class C extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <D data={this.props.myData} />
      </div>
    );
  }
}
class D extends Component {
  render() {
    return (
      <div>
        I'm gettting Data from My parent ie.,from ContextInReact Component:::
        {this.props.data}
      </div>
    );
  }
}
