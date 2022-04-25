import React, {Component} from "react";
import ButtonClick from "./ButtonClick";
import Hover from "./Hover";

export default class HOC extends Component {
  render() {
    return (
      <div>
        <ButtonClick />
        <Hover />
      </div>
    );
  }
}
