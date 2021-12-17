import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import lennyspizza_1 from "../images/lennyspizza/lennyspizza_project.png";
import lennyspizza_2 from "../images/lennyspizza/lennyspizza_menu_PC.png";
import lennyspizza_3 from "../images/lennyspizza/lennyspizza_location_mobile.png";
import lennyspizza_4 from "../images/lennyspizza/lennyspizza_promotion_tablet.png";

import zillowscrape_1 from "../images/zillowscrape/trend.png";
import zillowscrape_2 from "../images/zillowscrape/scatter.png";
import zillowscrape_3 from "../images/zillowscrape/bar.png";

import accountbook_1 from "../images/accountingbook/monthly.png";
import accountbook_2 from "../images/accountingbook/trend.png";

import imageanalysis_1 from "../images/imageanalysis/panellevel.jpg";
import imageanalysis_2 from "../images/imageanalysis/pixellevel.png";
import imageanalysis_3 from "../images/imageanalysis/pixeluniformity.png";

import imageprocess_1 from "../images/imageprocess/imageprocess.jpg";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="text-primary flex-col w-5/6 m-auto mt-24 min-h-screen bg-primary">
        <h1 className="text-4xl mb-8">PROJECTS</h1>

        <div className="row space-y-2 mt-4">
          <h2 className="text-2xl">Lenny's Pizza Website</h2>
          <div className="flex flex-col">
            <div className="w-full">
              <AwesomeSlider animation="cubeAnimation">
                <div data-src={lennyspizza_1} />
                <div data-src={lennyspizza_2} />
                <div data-src={lennyspizza_3} />
                <div data-src={lennyspizza_4} />
              </AwesomeSlider>
            </div>
            <div className="w-5/6 flex mt-16 mb-20 inline-block">
              <div className="w-3/4 mx-3 text-md">
                <h3 className="text-lg">About Project</h3>
                <p className="w-full text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner.
                </p>
              </div>
              <div className="w-1/4 mx-3">
                <h3 className="text-lg">Technical Sheet</h3>
                <ul className="list-disc">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row space-y-2 mt-4">
          <h2 className="text-2xl">Recipe Website</h2>
          <div className="flex flex-col">
            <div className="w-full">
              <AwesomeSlider animation="cubeAnimation">
                <div data-src={lennyspizza_1} />
                <div data-src={lennyspizza_2} />
                <div data-src={lennyspizza_3} />
                <div data-src={lennyspizza_4} />
              </AwesomeSlider>
            </div>
            <div className="w-5/6 flex mt-16 mb-20 inline-block">
              <div className="w-3/4 mx-3 text-md">
                <h3 className="text-lg">About Project</h3>
                <p className="w-full text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner.
                </p>
              </div>
              <div className="w-1/4 mx-3">
                <h3 className="text-lg">Technical Sheet</h3>
                <ul className="list-disc">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row space-y-4 mt-8">
          <h2 className="text-2xl">
            Real Estate Market Data Scrape from Zillow
          </h2>
          <div className="flex flex-col">
            <div className="w-full">
              <AwesomeSlider animation="cubeAnimation">
                <div data-src={zillowscrape_1} />
                <div data-src={zillowscrape_2} />
                <div data-src={zillowscrape_3} />
              </AwesomeSlider>
            </div>
            <div className="w-5/6 flex mt-16 mb-20 inline-block">
              <div className="w-3/4 mx-3 text-md">
                <h3 className="text-lg">About Project</h3>
                <p className="w-full text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner.
                </p>
              </div>
              <div className="w-1/4 mx-3">
                <h3 className="text-lg">Technical Sheet</h3>
                <ul className="list-disc">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row space-y-4 mt-8">
          <h2 className="text-2xl">Accounting Book</h2>
          <div className="flex flex-col">
            <div className="w-full">
              <AwesomeSlider animation="cubeAnimation">
                <div data-src={accountbook_1} />
                <div data-src={accountbook_2} />
              </AwesomeSlider>
            </div>
            <div className="w-5/6 flex mt-16 mb-20 inline-block">
              <div className="w-3/4 mx-3 text-md">
                <h3 className="text-lg">About Project</h3>
                <p className="w-full text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner.
                </p>
              </div>
              <div className="w-1/4 mx-3">
                <h3 className="text-lg">Technical Sheet</h3>
                <ul className="list-disc">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row space-y-4 mt-8">
          <h2 className="text-2xl">Image Process of Carbon Nanotube</h2>
          <div className="flex flex-col">
            <div className="w-full">
              <AwesomeSlider animation="cubeAnimation">
                <div data-src={imageanalysis_1} />
                <div data-src={imageanalysis_2} />
                <div data-src={imageanalysis_3} />
              </AwesomeSlider>
            </div>
            <div className="w-5/6 flex mt-16 mb-20 inline-block">
              <div className="w-3/4 mx-3 text-md">
                <h3 className="text-lg">About Project</h3>
                <p className="w-full text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner.
                </p>
              </div>
              <div className="w-1/4 mx-3">
                <h3 className="text-lg">Technical Sheet</h3>
                <ul className="list-disc">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row space-y-4 mt-8">
          <h2 className="text-2xl">Image Process of Display Panels</h2>
          <div className="flex flex-col">
            <div className="w-full">
              <AwesomeSlider animation="cubeAnimation">
                <div data-src={imageprocess_1} />
              </AwesomeSlider>
            </div>
            <div className="w-5/6 flex mt-16 mb-20 inline-block">
              <div className="w-3/4 mx-3 text-md">
                <h3 className="text-lg">About Project</h3>
                <p className="w-full text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner.
                </p>
              </div>
              <div className="w-1/4 mx-3">
                <h3 className="text-lg">Technical Sheet</h3>
                <ul className="list-disc">
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
