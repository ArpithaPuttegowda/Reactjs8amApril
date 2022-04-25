import React from "react";

export const myHoc = (Comp) => {
  class Logic extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    incCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return (
        <div>
          <Comp fn={this.incCount} count={this.state.count} />
        </div>
      );
    }
  }
  return Logic;
};
