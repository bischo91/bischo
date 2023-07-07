import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { Element } from "react-scroll";
import { Link } from "react-scroll";
import ProjectContainer from "../components/project/ProjectContainer";
import ProjectContents from "../components/project/ProjectContent";
import React from "react";

class Projects extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.projectContents = ProjectContents;
    this.state = {
      onActiveProject: null,
      hash: window.location.hash,
      showSubnav: true,
    };
  }
  handleSetActive = () => {
    const { hash } = window.location;
    const onActiveProject = hash.split("#")[hash.split("#").length - 1];
    this.setState({
      onActiveProject,
      hash: window.location.hash,
      showSubnav: true,
    });
  };

  simplifyProjectTitle = (projectTitle) =>
    projectTitle.toLowerCase().replaceAll(" ", "").replaceAll("'", "");

  render() {
    return (
      <div>
        {this.props.showSubnav && (
          <div className="fixed hidden h-full m-auto my-auto ml-4 shadow md:w-32 top-12 lg:flex">
            <div className="flex w-full h-full m-auto">
              <nav className="flex">
                <ul className="items-center w-full m-auto space-y-24 text-primary">
                  {this.projectContents.map((project) => (
                    <li
                      className={`${
                        this.state.onActiveProject ===
                        this.simplifyProjectTitle(project?.title)
                          ? "text-sm font-bold"
                          : "text-xs"
                      } cursor-pointer`}
                    >
                      <Link
                        activeClass="active"
                        to={
                          "projects#" +
                          this.simplifyProjectTitle(project?.title)
                        }
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={this.handleSetActive}
                      >
                        {project?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
        <div className="relative flex-col w-3/4 min-h-screen mx-auto mt-24 text-primary bg-primary">
          <h1 className="font-mono text-4xl">PROJECTS</h1>
          {this.projectContents.map((project) => (
            <Element
              name={"projects#" + this.simplifyProjectTitle(project?.title)}
              className="mb-24 element"
            >
              <ProjectContainer project={project} />
            </Element>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
