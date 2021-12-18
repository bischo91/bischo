import React, { Component } from "react";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation";
import { Element } from "react-scroll";

class App extends Component {

  componentDidMount() {
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Chnage page title to Brian Cho
    document.title = "Brian Cho";
  }

  render() {
    return (
      <div className="font-mono flex flex-col bg-primary">
        <Navigation />
        <Element name="about" className="element" id="aboutId">
          <About />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="resume" className="element">
          <Resume />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default App;
