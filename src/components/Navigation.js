import { Link } from "react-scroll";
import React, { createRef } from "react";
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
    if (window.innerHeight < 600) {
      this.navrepositionRef.current.classList.add("top-0");
      this.navrepositionRef.current.classList.remove("-bottom-8", "absolute");
    } else {
      this.navrepositionRef.current.classList.remove("top-0");
      this.navrepositionRef.current.classList.add("-bottom-8", "absolute");
    }
  };

  handleScroll = () => {
    // Fix navbar to the top once scrolled past first page (client height)
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > document.documentElement.clientHeight) {
      this.navRef.current.classList.add("fixed", "top-0");
      // Fix navbar to the top
    } else {
      this.navRef.current.classList.remove("fixed", "top-0");
      // Unfix navbar from the top
    }
  };

  render() {
    return (
      <div
        className="absolute flex fixed -bottom-16 h-16 z-50 shadow w-full"
        ref={this.navrepositionRef}
      >
        <div
          className="bg-secondary text-lg w-full h-16 flex"
          ref={this.navRef}
        >
          <nav className="w-5/6 flex">
            <ul
              className="text-primary list-none m-auto
            flex w-full justify-around items-center"
            >
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
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
          <div className="w-1/6 flex">
            <div className="m-auto h-1/2 w-full">
              <a
                className="cursor-pointer h-full float-right"
                href="https://github.com/bischo91"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github_logo}
                  alt="GitHub"
                  className="h-full w-full object-scale-down object-contain"
                />
              </a>
              <a
                className="cursor-pointer h-full float-right"
                href="https://www.linkedin.com/in/bischo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin_logo}
                  alt="LinkedIn"
                  className="h-full w-full object-scale-down object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
