import React, {Component} from "react";
import ExceptionBoundary from "./ExceptionBoundary";
import Hero from "./Hero";

export default class ExceptionHandling extends Component {
  render() {
    return (
      <div>
        <>
          <ExceptionBoundary>
            <Hero hero="Puneeth">Arpitha</Hero>
          </ExceptionBoundary>
          <ExceptionBoundary>
            <Hero hero="Darshan" />
          </ExceptionBoundary>
          <ExceptionBoundary>
            <Hero hero="Yash" />
          </ExceptionBoundary>
          <ExceptionBoundary>
            <Hero hero="Joker" />
          </ExceptionBoundary>
        </>
      </div>
    );
  }
}
