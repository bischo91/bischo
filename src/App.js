import React, { Component } from "react";

import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import CryptoSearchApp from "./components/cryptoApp/CryptoSearchApp";

class App extends Component {

  componentDidMount() {
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Chnage page title to Brian Cho
    document.title = "Brian Cho";
    // console.log(cryptoSearchApp)
  }

// <Route path="/cryptosearch" render ={() <CryptoSearchApp />} />
  // </Route> component={cryptoSearchApp} />
  // <Route exact path="/about" element={<About />} />
  render() {
    return (
      <div className="font-mono flex flex-col bg-primary">
        <Routes>
          <Route path="/cryptosearch" element={<CryptoSearchApp />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </div>
    );
  }
}

export default App;
