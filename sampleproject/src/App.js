import React, {Component} from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import "./App.css";
import Menu from "./Component/Menu";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}
