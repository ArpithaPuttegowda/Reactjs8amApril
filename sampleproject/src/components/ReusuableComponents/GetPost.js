import React, {Component} from "react";
import axios from "axios";
import {ServerCall} from "../../Services/ServiceCall";
import ReusualbeListComp from "./ReusualbeListComp";
import {ReusuableTableComponent} from "./ResualbeTableComp";
import ReusuableClassTableComp from "../ReusuableClassTableComp";
import DropDownReusuableComp from "../DropDownReusuableComp";

export default class GetPost extends Component {
  state = {
    data: []
  };
  handlePosts = () => {
    ServerCall.getCall("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.handlePosts}>Get Posts</button>
        <ReusualbeListComp data={this.state.data.slice(0, 2)} />
        <ReusuableTableComponent
          headers={["BODY", "ID", "TITLE"]}
          keys={["body", "id", "title"]}
          data={this.state.data}
        />
        {/* <ReusuableClassTableComp
          headers={["BODY", "ID", "TITLE"]}
          keys={["body", "id", "title"]}
          data={this.state.data}
        /> */}

        <DropDownReusuableComp data={this.state.data} k="title" />
      </div>
    );
  }
}
