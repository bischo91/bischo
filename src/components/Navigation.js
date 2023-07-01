import React, { createRef } from "react";

import About from "../routes/About";
import Contact from "../routes/Contact";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Projects from "../routes/Projects";
import Resume from "../routes/Resume";
import github_logo from "../images/github.png";
import linkedin_logo from "../images/linkedin.png";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.navRef = createRef();
    this.navrepositionRef = createRef();
  }

  componentDidMount() {
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Chnage page title to Brian Cho
    document.title = "Brian Cho";
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
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
        <div
          className="z-50 flex w-full h-16 shadow "
          ref={this.navrepositionRef}
        >
          <div
            className="flex w-full h-16 text-sm bg-secondary sm:text-lg"
            ref={this.navRef}
          >
            <nav className="flex w-5/6">
              <ul className="flex items-center justify-around w-full m-auto list-none text-primary">
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Brian Cho
                  </Link>
                </li>
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
                    to="contact"
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex w-1/6">
              <div className="w-full m-auto h-1/2">
                <a
                  className="float-right w-1/2 h-full cursor-pointer sm:w-auto"
                  href="https://github.com/bischo91"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github_logo}
                    alt="GitHub"
                    className="object-contain object-scale-down w-full h-full"
                  />
                </a>
                <a
                  className="float-right w-1/2 h-full cursor-pointer sm:w-auto"
                  href="https://www.linkedin.com/in/bischo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin_logo}
                    alt="LinkedIn"
                    className="object-contain object-scale-down w-full h-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-mono bg-primary">
          <Element name="about" className="element" id="aboutId">
            <About />
          </Element>
          <Element name="projects" className="element">
            <Projects />
          </Element>
          <Element name="resume" className="element">
            <Resume />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
}

export default Navigation;
