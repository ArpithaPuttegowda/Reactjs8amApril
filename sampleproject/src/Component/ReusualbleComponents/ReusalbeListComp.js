import React, {Component} from "react";

export default class ReusalbeListComp extends Component {
  render() {
    return (
      <div>
        {this.props.data?.map((v) => {
          return <h1>{v}</h1>;
        })}
      </div>
    );
  }
}
