import React, { createRef } from "react";

import AwesomeSlider from "react-awesome-slider";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import github_logo from "../images/github_white.png";

class ProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    let project = {
      title: props.title,
      gitHubLink: props.gitHubLink,
      imageSrc: props.imageSrc,
      description: props.description,
      techStack: props.techStack,
    };

    this.navRef = createRef();
    this.navrepositionRef = createRef();
  }

  componentDidMount() {
    // Scroll to stop when page loaded
    // window.scrollTo(0, 0);
    // Chnage page title to Brian Cho
    document.title = "Brian Cho";
    // window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("resize", this.handleResize);
    // this.handleResize();
  }

  render() {
    return (
      <div className="mx-auto mt-12 space-y-2 row">
        <div className="inline-flex w-full h-8 m-4">
          <h2 className="text-lg lg:text-2xl md:text-xl">
            {this.props.project?.title}
          </h2>
        </div>
        <div className="w-full mx-auto mt-8 md:w-2/3">
          {this.project?.imageSrc.length > 0 && (
            <AwesomeSlider
              animation="cubeAnimation"
              style={{ objectFit: "contain" }}
            >
              {this.props.project.imageSrc.map((imageSrc, i) => {
                <div data-src={imageSrc} />;
              })}
            </AwesomeSlider>
          )}
        </div>
        <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
          <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
            <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
              About Project
              <a
                className="m-auto ml-4 cursor-pointer"
                href={this.props.project?.gitHubLink}
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
              {this.props.project?.description}
            </p>
          </div>
          <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
            {/* <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
              Technical Sheet
            </h3>
            <ul className="text-sm list-disc md:text-md">
              <li>
                Python
                <ul className="pl-4 list-disc">
                  <li>OpenCv</li>
                  <li>scikit-image</li>
                  <li>Matplotlib</li>
                  <li>NumPy</li>
                  <li>SciPy</li>
                  <li>openpyxl</li>
                </ul>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
