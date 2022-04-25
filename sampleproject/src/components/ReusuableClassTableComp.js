import React, {Component} from "react";

export default class ReusuableClassTableComp extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <table border="1px solid">
          <thead>
            {this.props.headers.map((header, i) => {
              return <th key={i}>{header}</th>;
            })}
          </thead>
          <tbody>
            {this.props.data.map((obj, i) => {
              return (
                <tr key={i}>
                  {this.props.keys.map((key, i) => {
                    return <td key={i}>{obj[key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
