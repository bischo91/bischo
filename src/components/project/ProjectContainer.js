import "../../styles/CustomFont.css";

import AwesomeSlider from "react-awesome-slider";
import React from "react";
import github_logo from "../../images/github_white.png";

class ProjectContainer extends React.Component {
  render() {
    const styles = `
    .awssld__content > img {
      object-fit: contain;
    }
    `;
    return (
      <div className="mx-auto space-y-2">
        <div className="inline-flex w-full h-8 mx-2 mt-16">
          <h2 className="my-4 font-mono text-2xl lg:text-2xl md:text-3xl">
            {this.props.project?.title}
            {this.props.project?.gitHubLink && (
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
            )}
          </h2>
        </div>
        {this.props.project?.imageSrc?.length > 0 && (
          <div className="flex w-full h-full mx-auto lg:w-5/6">
            <style>{styles}</style>
            <AwesomeSlider animation="cubeAnimation" className="my-4">
              {this.props.project?.imageSrc.map((imageSrc) => (
                <div data-src={imageSrc} />
              ))}
            </AwesomeSlider>
          </div>
        )}
        <div className="flex flex-col w-full mx-auto lg:flex-row ">
          <div className="w-full p-2 mx-3 text-md lg:w-3/4">
            {/* <h3 className="h-6 my-2 font-mono lg:text-xl md:text-lg text-md">
              About Project
            </h3> */}
            <p className="w-full mx-auto mt-12 leading-relaxed font-openSans md:text-md">
              {this.props.project?.description
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>
          </div>
          {this.props.project?.techStack?.length > 0 && (
            <div className="w-full p-2 mx-3 mt-10 lg:w-1/4">
              <h3 className="h-6 my-2 font-mono lg:text-xl md:text-lg text-md">
                Technical Sheet
              </h3>
              {this.props.project?.techStack.map(({ language, packages }) => (
                <ul className="font-mono text-sm list-disc md:text-md">
                  <li key={language}>
                    {language}
                    {packages?.length && (
                      <ul className="pl-4 list-disc">
                        {packages.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
