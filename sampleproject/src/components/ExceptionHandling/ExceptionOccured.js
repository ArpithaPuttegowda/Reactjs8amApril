import React, {Component} from "react";
import Hero from "./Hero";

export default class ExceptionOccured extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  componentDidCatch(e) {
    alert(e);
  }
  static getDerivedStateFromError() {
    alert("exception occured");
    // this.setState({
    //   isError: true
    // });
    return {
      isError: true
    };
  }
  render() {
    return (
      <div>
        {this.state.isError ? (
          "I'm handling exception, as it got exceptions"
        ) : (
          <>
            <Hero heroName={"RajiniKanth"} />
            <Hero heroName={"NTR"} />
            <Hero heroName={"Jiranjeev"} />
          </>
        )}
      </div>
    );
  }
}
