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
import RemontKranov from "./pages/RemontKranov";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/remont-kranov" exact component={RemontKranov} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

