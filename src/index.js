import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./sass/main.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <ScrollToTop />

    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/service-1" exact component={Service1} />
      <Route path="/service-2" exact component={Service3} />
      <Route path="/service-3" exact component={Service4} />
      <Route path="/about" exact component={About} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

