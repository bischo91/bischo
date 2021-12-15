import React from "react";
import lennyspizza from "../images/lennyspizzaproject.png";
// import NEED TO HAVE RECIPE WEBSITE PHOTO
import zillowscraper from "../images/realestatezillow.png";
import imageprocess from "../images/imageanalysis.jpg";
import imageanalysis from "../images/displaypanelanalysis.png";

class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      };
    }

  render() {
      return (
        <div
          className="flex-col w-5/6 m-auto mt-24 min-h-screen bg-primary">
          <h1>PROJECTS</h1>
              <div className="row space-y-4 mt-8">
                <h2>Lenny's Pizza Website</h2>
                <div className="flex inline-block">
                  <div className ="column w-full"><img src={lennyspizza} alt="Lenny's Pizza" /></div>
                  <div className ="column">
                    <p>
                      I designed and maintained a website for a family-owned restaurant, Lenny's Pizza.
                      The website was responsive and included contact form to send an email to the restaurant owner.
                    </p>
                    <h3>Technical Sheet</h3>
                    <ul className="list-disc">
                      <li>HTML/CSS</li>
                      <li>Javascript</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row space-y-4 mt-8">
                <h2>Recipe Website</h2>
                <div className="flex inline-block">
                  <div className ="column w-full"><img src={null} alt="Lenny's Pizza" /></div>
                  <div className ="column">
                    <p>
                      Recipe website designed
                    </p>
                    <h3>Technical Sheet</h3>
                    <ul className="list-disc">
                      <li>React</li>
                      <li>Django</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row space-y-4 mt-8">
                <h2>Real Estate Market Data Scrape from Zillow</h2>
                <div className="flex inline-block">
                  <div className ="column w-1/3">
                    <img src={zillowscraper} alt="Lenny's Pizza" /></div>
                  <div className ="column w-2/3">
                    <p>
                      Recipe website designed
                    </p>
                    <h3>Technical Sheet</h3>
                    <ul className="list-disc">
                      <li>React</li>
                      <li>Django</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row space-y-4 mt-8">
                <h2>Image Process of Carbon Nanotube</h2>
                <div className="flex inline-block">
                  <div className ="column w-full">
                    <img src={imageprocess} alt="Lenny's Pizza" /></div>
                  <div className ="column">
                    <p>
                      Recipe website designed
                    </p>
                    <h3>Technical Sheet</h3>
                    <ul className="list-disc">
                      <li>React</li>
                      <li>Django</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row space-y-4 mt-8">
                <h2>Image Process of Display Panels</h2>
                <div className="flex inline-block">
                  <div className ="column w-full"><img src={imageanalysis} alt="Lenny's Pizza" /></div>
                  <div className ="column">
                    <p>
                      Recipe website designed
                    </p>
                    <h3>Technical Sheet</h3>
                    <ul className="list-disc">
                      <li>React</li>
                      <li>Django</li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
        );

  }
}

export default Projects;
