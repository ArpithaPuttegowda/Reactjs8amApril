import React, {Component, Fragment} from "react";

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
      "Sachin",
      "ST"
    ];

    return (
      <div>
        <div>
          {players.map((value, index) => {
            return <p key={value + index}>{value}</p>;
          })}
        </div>
        {players.map((value, index) => {
          return (
            <Fragment key={value + index}>
              <h1>{value}</h1>
              <h1>Sachin</h1>
            </Fragment>
          );
        })}
        <ul>
          {players.map((v, i) => (
            <li key={v + i}>{v}</li>
          ))}
        </ul>
        <table border="1px solid">
          {/* <tr>
            <td>Sachin</td>
          </tr>
          <tr>
            <td>Dhoin</td>
          </tr>
          <tr>
            <td>Kohil</td>
          </tr>
          <tr>
            <td>Sewag</td>
          </tr> */}
          {players.map((player, index) => {
            return (
              <tr key={player + index}>
                <td>{player}</td>
              </tr>
            );
          })}
        </table>
        <p>
          <select>
            {players.map((player, index) => {
              return <option key={index + player}>{player}</option>;
            })}
          </select>
        </p>
      </div>
    );
  }
}
