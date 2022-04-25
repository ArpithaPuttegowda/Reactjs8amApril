import React, {Component} from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

export default class ExceptionOccured2 extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Darshan" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Jiranjeevi" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Vishnu" />
        </ErrorBoundary>
      </div>
    );
  }
}
