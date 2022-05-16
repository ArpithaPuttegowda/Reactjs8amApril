import React, {Component, lazy, Suspense} from "react";
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import Home from "./Home";
const Home = lazy(() => import("./Home"));
// const AboutUs = lazy(() => import("./AboutUs"));
const ContactUs = lazy(() => import("./ContactUs"));

export default class Menu extends Component {
  render() {
    return (
      <>
        <Suspense fallback="...loading">
          <BrowserRouter>
            <div id="menu">
              <Link to="/home">Home</Link>
              <Link to="/aboutUs">AboutUs</Link>
              <Link to="/contactUs">ContactUs</Link>
            </div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </>
    );
  }
}

// class Link extends React.Component {
//   render() {
//     return <a href={this.props.to}>{this.props.chidren}</a>;
//   }
// }
