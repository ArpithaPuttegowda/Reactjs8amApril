import {Component, useImperativeHandle} from "react";
import Parent from "./Component/ForwardingREf";
import GetElementRefOnChange from "./Component/getElementRefOnChange";
import ListKeys2 from "./Component/ListAndKeys2";
import ListKeys from "./Component/ListKeys";
import ListKeys1 from "./Component/ListKeys1";
import ReactCreateRef from "./Component/ReactCreateRef";
import RefReact18 from "./Component/RefReact18";
import SetState1 from "./Component/SetState1";
import SetState2 from "./Component/SetState2Cb";
import SetState3 from "./Component/SetStateCBasFirstArg";
import FancyInput from "./Component/UseImperative";

class App extends Component {
  state = {
    loadComp: true
  };
  render() {
    return (
      <>
        {/* <RefReact18 /> */}
        {/* <ReactCreateRef /> */}
        {/* <Parent /> */}
        {/* <GetElementRefOnChange /> */}
        <SetState1 />
        {/* <SetState2 /> */}
        {/* <SetState3 /> */}
        {/* <ListKeys />
        <ListKeys1 /> */}
        {/* <FancyInput /> */}
        {this.state.loadComp && <ListKeys2 />}
        <button onClick={() => this.setState({loadComp: false})}>
          Click me
        </button>
      </>
    );
  }
}

export {App};
