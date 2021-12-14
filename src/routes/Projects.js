import React, { createRef } from "react";
import ScrollToTop from '../components/ScrollToTop';
import { Link, HashRouter, Route } from "react-router-dom";
import Navigation from "../components/Navigation";

class Projects extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      };
    }


  render() {
      return (
        <div
          ref={ this.projectsRef }
          className="block w-full min-h-screen top-16 relative bg-primary">
          <h1>PROJECTS</h1>
              <p>This is my portfolio</p>
              <p>Real Estate Market Data Scape</p>
              <p>Expense Spending Window Application</p>
              <p>Image Process CNT</p>
              <p>Image Process Uniformity</p>
              <div class="row">
                <div class="column">
                  <img src="images/profile_animated.png" alt="" ></img>
                </div>
                <div class="column">
                    <a href="lennyswebsite/index.php">
                    <img src="images/lennyslogo.png" alt="lennyswebsite" href="lennyswebsite/index.php"></img>
                    </a>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img src="images/profile_animated.png" alt=""></img>
                </div>
                <div class="column">
                  <img src="images/profile_animated.png" alt=""></img>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img src="images/profile_animated.png" alt=""></img>
                </div>
                <div class="column">
                  <img src="images/profile_animated.png" alt=""></img>
                </div>
              </div>
        </div>
        );

  }
}

export default Projects;
