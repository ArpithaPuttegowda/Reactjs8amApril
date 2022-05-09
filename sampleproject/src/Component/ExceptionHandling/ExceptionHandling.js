import React, {Component} from "react";
import Hero from "./Hero";

export default class ExceptionHandling extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  static getDerivedStateFromError() {
    alert("getSnapshotBeforeUpdate");
    return {
      isError: true
    };
  }
  componentDidCatch() {
    alert("componentDidCatch");
  }
  render() {
    return (
      <div>
        {this.state.isError ? (
          "Something went wrong"
        ) : (
          <>
            <Hero hero="Puneeth" />
            <Hero hero="Darshan" />
            <Hero hero="Yash" />
            <Hero hero="Joker" />
          </>
        )}
      </div>
    );
  }
}
