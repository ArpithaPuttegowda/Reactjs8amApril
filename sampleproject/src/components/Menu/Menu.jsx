import "./Menu.css";
import React, { lazy, Suspense } from "react";
import Home from "../Home";
import AboutUs from "../AboutUs";
import PageNotFound from "../PageNotFound";
import HOC from "../HOC/HOC";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import GetPosts from "../ReusuableComponents/ComponentWillUnmount";
// import { ForwardRef } from "../ForwardRef"

// import ListOfPlayers from "../ListOfPlayers";
// import GetPost from "../ReusuableComponents/GetPost";
// import GetDataInFirstTimeLoad from "../ReusuableComponents/GetDataInFirstTimeLoad";
const GetPost = lazy(() => { return import("../ReusuableComponents/GetPost") })
const GetDataInFirstTimeLoad = lazy(() => import("../ReusuableComponents/GetDataInFirstTimeLoad"))
const ListOfPlayers = lazy(() => import("../ListOfPlayers"))
const ForwardRef = lazy(() => { return import("../ForwardRef") })
const PureComponent = lazy(() => import("../PureCOmponentExa"))
const ExceptionComponent = lazy(() => import("../ExceptionHandling/ExceptionOccured"))
const ExceptionComponent2 = lazy(() => import("../ExceptionHandling/ExceptionOccured2"))
const MyReduxExample = lazy(() => import("../MyReduxExample/MyReduxExample"))



function template() {
  const LinkData = [{ href: "/home", content: "Home" }, { href: "/about-us", content: "AboutUs" }, { href: "/hoc", content: "HOC" }, { href: "/RC", content: "Reusuable" }, { href: "/unmounting", content: "Mounting/Unmounting" }, { href: "/listOfPlayer", content: "ListOfPlayers" }, { href: "/getPost", content: "Get Posts" }, { href: "/getData", content: "Get Data" }, { href: "/forwardRef", content: "Forward REference" }, { href: "pureComponent", content: "Pure Component" }, { href: "/exceptionHandling", content: "Exception Handling" }, { href: "/myRedux", content: "MyRedux" }]
  const RouteData = [{ ele: <PureComponent loc="Hyderabad" />, path: "/pureComponent" }, { ele: <Home />, path: "/" }, { ele: <Home />, path: "/home" }, { ele: <AboutUs />, path: "/about-us" }, { ele: <HOC />, path: "/hoc" }, { ele: <PageNotFound />, path: "/*" }, { ele: <GetPosts />, path: "/unmounting" }, { ele: <ListOfPlayers />, path: "/listOfPlayer" }, { ele: <GetPost />, path: "/getPost" }, { ele: <GetDataInFirstTimeLoad />, path: "/getData" }, { ele: <ForwardRef />, path: "/forwardRef" }, { ele: <ExceptionComponent2 />, path: "/exceptionHandling" }, { ele: <MyReduxExample />, path: "/myRedux" }]
  return (
    <>
      <Suspense fallback="...Loading the data">
        <BrowserRouter>
          <div className="menu">
            {
              LinkData.map((obj, i) => {
                return <Link key={obj.content + i} to={obj.href}>{obj.content}</Link>
              })
            }

          </div>
          <Routes>
            {
              RouteData.map((obj, i) => {
                return <Route key={i} element={obj.ele} path={obj.path} />
              })
            }
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default template;
