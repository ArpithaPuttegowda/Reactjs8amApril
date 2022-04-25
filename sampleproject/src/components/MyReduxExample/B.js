import React, {Component} from "react";

class B extends Component {
  handleLocation = () => {
    let location = this.refs.loc.value;
    this.props.fn(location);
  };
  render() {
    return (
      <div>
        <b>Location</b>
        <input ref="loc" />
        <button onClick={this.handleLocation}>Set Location</button>
      </div>
    );
  }
}

export default B;
