import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import AwesomeSlider from "react-awesome-slider";
import React from "react";
import github_logo from "../images/github_white.png";
import lennyspizza_1 from "../images/lennyspizza_project.png";
import lennyspizza_2 from "../images/lennyspizza_menu_PC.png";
import lennyspizza_3 from "../images/lennyspizza_location_mobile.png";
import lennyspizza_4 from "../images/lennyspizza_promotion_tablet.png";

class Project1 extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    // let myElement = document.querySelector("#awssld__content");
    // console.log(myElement);
  }

  render() {
    return (
      <div>
        <div className="flex-col w-5/6 min-h-screen m-auto mt-24 text-primary md:w-2/3 bg-primary">
          <h1 className="mb-8 text-4xl">PROJECTS</h1>
          <div className="mx-auto mt-4 space-y-2 row">
            <div className="inline-flex w-full h-8 m-4">
              <h2 className="text-xl lg:text-2xl md:text-xl">
                Lenny's Pizza Website
              </h2>
            </div>

            <div className="w-full mx-auto mt-8 md:w-2/3">
              <AwesomeSlider
                animation="cubeAnimation"
                style={{ objectFit: "contain" }}
              >
                <div data-src={lennyspizza_1} />
                <div data-src={lennyspizza_2} />
                <div data-src={lennyspizza_3} />
                <div data-src={lennyspizza_4} />
              </AwesomeSlider>
            </div>
            <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
              <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  About Project
                  <a
                    className="m-auto ml-4 cursor-pointer"
                    href="https://github.com/bischo91/lennyspizza"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github_logo}
                      alt="GitHub"
                      className="inline-flex object-scale-down w-auto h-6"
                    />
                  </a>
                </h3>
                <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
                  I designed and maintained a website for a family-owned
                  restaurant, Lenny's Pizza. The website was responsive and
                  included contact form to send an email to the restaurant
                  owner. I also obtained web traffic data such as number of
                  visitors trend and general locations, which helped the
                  restaurant owner to manage their business more efficiently.
                  <br></br>
                  Click{" "}
                  <a
                    className="underline"
                    href="http://lennyspizza.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  to see the live website.
                </p>
              </div>
              <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
                <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
                  Technical Sheet
                </h3>
                <ul className="text-sm list-disc md:text-md">
                  <li>PHP</li>
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

export default Project1;
