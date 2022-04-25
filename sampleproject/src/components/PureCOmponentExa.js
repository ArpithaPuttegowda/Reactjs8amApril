import React, {Component, PureComponent} from "react";

// export default class PureCOmponentExa extends PureComponent {
//   state = {
//     name: "Sachin",
//     loc: "hyd"
//   };
//   fnClick = () => {
//     this.setState({
//       name: "Sachin-"
//     });
//   };
//   //   shouldComponentUpdate(Nextprops, Nextstate) {
//   //     if (this.state.name !== Nextstate.name) return true;
//   //     return false;
//   //   }
//   render() {
//     alert("Render called");
//     return (
//       <div>
//         PUre COmpnent
//         <h1>{this.state.name}</h1>
//         <button onClick={this.fnClick}>Click me</button>
//       </div>
//     );
//   }
// }

export default class PureCOmponentExa extends PureComponent {
  state = {
    count: 0
  };
  fnClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  //   shouldComponentUpdate(Nextprops, Nextstate) {
  //     if (this.state.name !== Nextstate.name) return true;
  //     return false;
  //   }
  render() {
    alert("Parent Render called");
    return (
      <div>
        PUre COmpnent
        <h1>{this.state.count}</h1>
        <Child />
        <button onClick={this.fnClick}>Click me</button>
      </div>
    );
  }
}

export class Child extends PureComponent {
  render() {
    alert("Child render called");
    return <div>I'm Child Component</div>;
  }
}
