import {Component, createElement} from "react";

class WithoutJSX extends Component {
  render() {
    return createElement(
      "h1",
      {style: {color: "blue", border: "1px solid green"}, className: "myH1"},
      [
        createElement("h1", {style: {color: "pink"}}, "hyd"),
        createElement(
          "div",
          {className: "myClass"},
          createElement("span", null, "CHENNAI")
        )
      ]
    );
  }
}

// class WithoutJSX extends Component {
//   render() {
//     return (
//       <h1 style={{color:"red"}}>
//         <div id="myDiv">Hyderabad</div>
//         <div className="myDivClass"><span>CHennai</span></div>
//       </h1>
//     );
//   }
// }

export default WithoutJSX;
