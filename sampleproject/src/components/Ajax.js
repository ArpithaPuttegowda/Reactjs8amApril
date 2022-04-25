import axios from "axios";
import React, {Component} from "react";

export default class Ajax extends Component {
  handleAjax = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (res) => {
        console.log(res.data);
      },
      (res) => {
        console.log(res);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.handleAjax}>Ajax</button>
      </div>
    );
  }
}
