import React, { Component } from 'react';
import { render } from "react-dom";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import About from './routes/About';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import Contact from './routes/Contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
    }
  }

componentDidMount() {
  // Chnage page title to Brian Cho
  document.title = "Brian Cho"
  // Scroll to stop when page loaded
  window.scrollTo(0, 0)
}

render(){
  return (
      <div className="App">
        <div className="bg-primary flex flex-col h-full min-h-screen z-20">
          <HashRouter>
            <About />
            <Navigation />
              <Routes>
                <Route path="/" exact={true} component={About} />
                <Route path="/projects" exact={true} component={Projects} />
                <Route path="/resume" exact={true} component={Resume} />
                <Route path="/contact" exact={true} component={Contact} />
              </Routes>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
