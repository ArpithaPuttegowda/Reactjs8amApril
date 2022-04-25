import React, {Component} from "react";

const ctx = React.createContext();

export default class ContextInReact extends Component {
  render() {
    const myData = "DELHI";
    return (
      <div>
        <ctx.Provider value={myData}>
          <A />
        </ctx.Provider>
      </div>
    );
  }
}

class A extends Component {
  render() {
    return (
      <div>
        <B />
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h1>
          I'm B:;:::<ctx.Consumer>{(data) => data}</ctx.Consumer>
        </h1>
        <C />
      </div>
    );
  }
}

class C extends Component {
  render() {
    return (
      <div>
        <h1>
          I'm C:<ctx.Consumer>{(data) => data}</ctx.Consumer>
        </h1>
        <D />
      </div>
    );
  }
}
class D extends Component {
  render() {
    return (
      <div>
        I'm gettting Data from My parent ie.,from ContextInReact Component:::
        <ctx.Consumer>{(myData) => <span>{myData}</span>}</ctx.Consumer>
      </div>
    );
  }
}
