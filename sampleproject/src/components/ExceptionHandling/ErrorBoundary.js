import React, {Component} from "react";

export default class ErrorBoundary extends Component {
  state = {
    isError: false
  };
  componentDidCatch(e) {
    console.log(e, "I'm componentDidCatch");
  }
  static getDerivedStateFromError() {
    return {
      isError: true
    };
  }
  render() {
    return (
      <div>
        {this.state.isError ? "Something went wrong" : this.props.children}
      </div>
    );
  }
}
