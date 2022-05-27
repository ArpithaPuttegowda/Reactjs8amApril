import React, {Component} from "react";
import {connect} from "react-redux";

class Ajax extends Component {
  handleAjax = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => {
        return res.json();
      }
    );
    this.props.dispatch({
      type: "AJAX",
      data: res
    });

    console.log(res, "res");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleAjax}>Ajax</button>
      </div>
    );
  }
}
const mdp = (dispatch) => {
  return {
    dispatch
  };
};
Ajax = connect(null, mdp)(Ajax);
export default Ajax;
