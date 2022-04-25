import {Component} from "react";
import ReactCreateRef from "./Component/ReactCreateRef";
import RefReact18 from "./Component/RefReact18";

class App extends Component {
  render() {
    return (
      <>
        <RefReact18 />
        <ReactCreateRef />
      </>
    );
  }
}

export {App};
