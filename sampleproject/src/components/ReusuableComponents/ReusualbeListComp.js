import React, {Component} from "react";

export default class ReusualbeListComp extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data?.map((obj, i) => {
            return <li>{obj.body}</li>;
          })}
        </ul>
      </div>
    );
  }
}
