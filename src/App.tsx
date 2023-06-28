import React from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Index";
import "./styles/css/style.css";

const App = () => {
  return (
    <div className="App">
        <Header />
        {/* <h1>Hello</h1> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      <Footer note="Footer Note" />
    </div>
  );
}

export default App;
