import {Component} from "react";
import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      loc: ""
    };
  }
  callback = (data) => {
    this.setState({
      name: data
    });
  };
  callback2 = (data) => {
    this.setState({
      loc: data
    });
  };
  render() {
    return (
      <div>
        <A cb={this.callback} />
        <B cb={this.callback2} />
        <C name={this.state.name} loc={this.state.loc} />
      </div>
    );
  }
}

export default App;
