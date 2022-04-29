import React, {Component} from "react";

export default class ListKeys extends Component {
  render() {
    const players = [
      "Goutham",
      "Sachin",
      "Dhoni",
      "Kohli",
      "arpitha",
      "Rahul",
      "Sewag",
      "Panth",
      "Sachin"
    ];

    return (
      <div>
        {players.map((value, index) => {
          return <p key={value + index}>{value}</p>;
        })}
      </div>
    );
  }
}
