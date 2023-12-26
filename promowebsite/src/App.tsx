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
function App() {
  return (
    <div className="App">
      <Header />
      <HomeSectionOne />
      <HomeSectionThree />
      <HomeSectionFive />
      <HomeSectionSeven />
      <HomeSectionNine />
      <Footer />
    </div>
  );
}

export default App;
