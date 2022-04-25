import React, {Component} from "react";
import {ServerCall} from "../../Services/ServiceCall";
import DropDownReusuableComp from "../DropDownReusuableComp";
import ReusuableClassTableComp from "../ReusuableClassTableComp";
import {ReusuableTableComponent} from "./ResualbeTableComp";
import ReusualbeListComp from "./ReusualbeListComp";

export default class GetDataInFirstTimeLoad extends Component {
  constructor() {
    super();

    this.state = {
      name: "Sachin",
      data: []
    };
    setTimeout(() => {
      this.setState({
        name: "DHONI"
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        Get the data in the first time load{this.state.name}
        <ReusualbeListComp data={this.state.data.slice(0, 1)} />
        {/* <ReusuableTableComponent
          headers={["BODY", "EMAIL", "ID"]}
          keys={["body", "email", "id"]}
          data={this.state.data}
        /> */}
        {/* <ReusuableClassTableComp
          headers={["BODY", "EMAIL", "ID"]}
          keys={["body", "email", "id"]}
          data={this.state.data}
        /> */}
        <DropDownReusuableComp data={this.state.data.slice(0, 10)} k="email" />
      </div>
    );
  }
  componentDidMount() {
    // axios.get().then(
    //   (res) => {
    //     console.log(res, "ComponentDidMOunt");
    //     this.setState({
    //       data: res.data
    //     });
    //   },
    //   (res) => {
    //     console.log(res);
    //   }
    // );
    ServerCall.getCall("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch((res) => {
        console.log(res);
      });
  }
}
