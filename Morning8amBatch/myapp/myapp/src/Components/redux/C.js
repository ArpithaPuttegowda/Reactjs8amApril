import React, {Component} from "react";
import {connect} from "react-redux";

class C extends Component {
  render() {
    return (
      <div>
        <h1>Name:{this.props.n}</h1>
        <h1>Location:{this.props.l}</h1>
      </div>
    );
  }
}

const msp = (state) => {
  return {
    n: state.r.name,
    l: state.r.loc
  };
};
const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};

C = connect(msp, mdp)(C);

export default C;
