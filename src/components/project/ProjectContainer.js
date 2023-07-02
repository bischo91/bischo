import AwesomeSlider from "react-awesome-slider";
import React from "react";
import github_logo from "../../images/github_white.png";

class ProjectContainer extends React.Component {
  render() {
    return (
      <div className="mx-auto space-y-2">
        <div className="inline-flex w-full h-8 m-4 mt-24">
          <h2 className="text-lg lg:text-2xl md:text-xl">
            {this.props.project?.title}
          </h2>
        </div>
        {this.props.project?.imageSrc?.length > 0 && (
          <div className="flex w-full mx-auto my-4 lg:w-5/6">
            <AwesomeSlider
              animation="cubeAnimation"
              className="object-scale-down"
            >
              {this.props.project?.imageSrc.map((imageSrc) => (
                <div data-src={imageSrc} />
              ))}
            </AwesomeSlider>
          </div>
        )}
        <div className="flex flex-col w-full mx-auto mt-16 mb-20 lg:flex-row ">
          <div className="w-full p-2 mx-3 my-5 text-md lg:w-3/4">
            <h3 className="h-6 my-2 lg:text-xl md:text-lg text-md">
              About Project
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
            </h3>
            <p className="w-full mx-auto text-sm leading-relaxed md:text-md">
              {this.props.project?.description}
            </p>
          </div>
          {this.props.project?.techStack?.length > 0 && (
            <div className="w-full p-2 mx-3 my-5 lg:w-1/4">
              <h3 className="h-6 my-2 mb-12 lg:text-xl md:text-lg text-md">
                Technical Sheet
              </h3>
              {this.props.project?.techStack.map(({ language, packages }) => (
                <ul className="text-sm list-disc md:text-md">
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
