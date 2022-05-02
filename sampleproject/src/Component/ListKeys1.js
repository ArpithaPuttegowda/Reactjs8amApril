import React, {Component} from "react";

export default class ListKeys1 extends Component {
  constructor() {
    super();
    this.playerDetail = {
      name: "Sachin",
      loc: "Mumbai",
      Runs: 1000,
      pinCode: 12345,
      areaName: "TowerA"
    };
  }
  render() {
    return (
      <div>
        <table border="1px solid ">
          {Object.keys(this.playerDetail).map((plyK, index) => {
            return (
              <>
                <tr>
                  <td style={{color: "red"}}> {plyK}</td>
                  <td>{this.playerDetail[plyK]}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    );
  }
}
