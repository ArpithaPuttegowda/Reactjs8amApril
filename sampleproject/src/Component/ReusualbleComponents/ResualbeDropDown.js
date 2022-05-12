import React, {Component} from "react";

export default class ResualbeDropDown extends Component {
  render() {
    return (
      <div>
        {this.props.data ? (
          <select>
            {this.props.data?.map((v, i) => {
              return <option>{v}</option>;
            })}
          </select>
        ) : (
          <h1>Data is not there</h1>
        )}
      </div>
    );
  }
}
