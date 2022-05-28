import React, {Component} from "react";
import {connect} from "react-redux";

class Ajax extends Component {
  handleAjax = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    this.props.dispatch({
      type: "AJAX",
      data
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
