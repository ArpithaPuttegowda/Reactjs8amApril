import React, {Component} from "react";

export default class ExceptionBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  static getDerivedStateFromError() {
    return {
      isError: true
    };
  }
  componentDidCatch() {}
  render() {
    return (
      <div>
        {this.state.isError ? (
          <h1>Something went wrong</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
