import "./styles/tailwind.css";

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import AnalyticsTracker from "./AnalytricsTracker";
import Navigation from "./components/Navigation";
import ReactGA from "react-ga4";

// import CryptoSearchApp from "./components/cryptoApp/CryptoSearchApp";

const GA_MEASUREMENT_ID = "G-TF1CDEFRM4";
ReactGA.initialize(GA_MEASUREMENT_ID);

class App extends Component {
  componentDidMount() {
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Chnage page title to Brian Cho
    document.title = "Brian Cho";
  }

  render() {
    return (
      <div className="flex flex-col bg-primary">
        <AnalyticsTracker />
        {/* <Routes>
          <Route path="/cryptosearch" element={<CryptoSearchApp />} />
        </Routes> */}
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </div>
    );
  }
}

export default App;
