import {Component} from "react";
import Parent from "./Component/ForwardingREf";
import GetElementRefOnChange from "./Component/getElementRefOnChange";
import ReactCreateRef from "./Component/ReactCreateRef";
import RefReact18 from "./Component/RefReact18";

class App extends Component {
  render() {
    return (
      <>
        {/* <RefReact18 /> */}
        {/* <ReactCreateRef /> */}
        {/* <Parent /> */}
        <GetElementRefOnChange />
      </>
    );
  }
}

export {App};
