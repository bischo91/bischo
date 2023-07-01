import React, { createRef } from "react";

import About from "../routes/About";
import Contact from "../routes/Contact";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Project1 from "../routes/Project1";
import Projects from "../routes/Projects";
import Resume from "../routes/Resume";
import github_logo from "../images/github.png";
import linkedin_logo from "../images/linkedin.png";

class Subnav extends React.Component {
  constructor(props) {
    super(props);
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

  handleResize = () => {
    // Move navbar to the top when the window.innerHeight is less than 600.
    if (this.navrepositionRef.current !== null) {
      if (window.innerHeight < 615) {
        this.navrepositionRef.current.classList.add("top-0");
        this.navrepositionRef.current.classList.remove(
          "-bottom-16",
          "absolute"
        );
      } else {
        this.navrepositionRef.current.classList.remove("top-0");
        this.navrepositionRef.current.classList.add("-bottom-16", "absolute");
      }
    }
  };

  handleScroll = () => {
    // Fix navbar to the top once scrolled past first page (client height)
    if (this.navRef.current !== null) {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll > document.documentElement.clientHeight) {
        this.navRef.current.classList.add("fixed", "top-0");
        // Fix navbar to the top
      } else {
        this.navRef.current.classList.remove("fixed", "top-0");
        // Unfix navbar from the top
      }
    }
  };

  render() {
    return (
      <div>
        test
        <div
          className="fixed flex w-12 h-full ml-0 shadow left-2 top-12"
          ref={this.navrepositionRef}
        >
          <div
            className="flex w-full h-full text-sm bg-secondary sm:text-lg"
            ref={this.navRef}
          >
            <nav className="flex w-full">
              <ul className="items-center w-full m-auto space-y-4 text-primary">
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Projects
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Resume
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="project1"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Lennnnn
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <Element name="project1" className="element">
            <Project1 />
          </Element>
        </div>
        {/* <div className="flex flex-col font-mono bg-primary">
          <Element name="projects" className="element">
            <Projects />
          </Element>
          <Element name="resume" className="element">
            <Resume />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </div> */}
      </div>
    );
  }
}

export default Subnav;
