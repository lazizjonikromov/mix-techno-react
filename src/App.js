import Builder from "./components/Builder";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Montaj from "./components/Montaj";
import Services from "./components/Services";

import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Aos from 'aos';
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1700,
    });
  }, []);

  return (
    <>
      <Header />
      <Services />
      <Montaj />
      <Builder />
      <Feedback />
    </>
  );
};

export default App;
