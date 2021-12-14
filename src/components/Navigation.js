import React from "react";
import { HashRouter, Route, Routes, Link, useRef } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Projects from "../routes/Projects";

class Navigation extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }
  componentWillReceiveProps(){
    // Scroll to stop when page loaded
    console.log('project received')
    console.log(Projects.projectRef)

  }

  testfun = () => {
    console.log(Projects.projectRef)
    Projects.projectRef.current.scrollIntoView()
  }

  render() {

      return (
        <div className="w-full top-16 relative bg-primary">
          <nav>
            <div className="container">
              <Link
                className="text-secondary"
                to="/about"
                >
                Brian Cho
              </Link>
              <Link
                className="text-secondary"
                to="/projects"
                onClick={ ()=> this.testfun() }
                >
                Projects
              </Link>
              <Link
                className="text-secondary"
                to="/resume"
                >
                Resume
              </Link>
              <Link
                className="text-secondary"
                to="/contact"
                >
                Contact
              </Link>
            </div>
          </nav>
        </div>
        );

  }
}

export default Navigation;
