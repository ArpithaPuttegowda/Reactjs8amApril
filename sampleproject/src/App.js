import {Component} from "react";
import Parent from "./Component/ForwardingREf";
import GetElementRefOnChange from "./Component/getElementRefOnChange";
import ReactCreateRef from "./Component/ReactCreateRef";
import RefReact18 from "./Component/RefReact18";
import SetState1 from "./Component/SetState1";
import SetState2 from "./Component/SetState2Cb";

class App extends Component {
  render() {
    return (
      <>
        {/* <RefReact18 /> */}
        {/* <ReactCreateRef /> */}
        {/* <Parent /> */}
        {/* <GetElementRefOnChange /> */}
        {/* <SetState1 /> */}
        <SetState2 />
      </>
    );
  }
}

export {App};
