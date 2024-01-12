import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./components/Header";
import HomeSectionOne from "./components/HomeSectionOne";
import HomeSectionThree from "./components/HomeSectionThree";
import HomeSectionFive from "./components/HomeSectionFive";
import HomeSectionSeven from "./components/HomeSectionSeven";
import HomeSectionNine from "./components/HomeSectionNine";
import HomeSectionTwo from "./components/HomeSectionTwo";
import HomeSectionFour from "./components/HomeSectionFour"
import HomeSectionSix from "./components/HomeSectionSix"
import HomeSectionEight from "./components/HomeSectionEight"
import HomeSectionTen from "./components/HomeSectionTen"
function App() {
  return (
    <div className="App">
      <Header />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionEight />
      <HomeSectionNine />
      <HomeSectionTen />
      <Footer />
    </div>
  );
}

export default App;
