import React from "react";
import { Link } from "react-router-dom";
// import { HashRouter, Route, Routes, Link, useRef } from "react-router-dom";

class Navigation extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }
  componentWillReceiveProps(){

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
