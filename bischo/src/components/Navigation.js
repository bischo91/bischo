import { Link } from "react-scroll";
import React, { createRef, useEffect, useRef } from "react";
import github_logo from "../images/github.png";
import linkedin_logo from "../images/linkedin.png";
import About from "../routes/About";
import Projects from "../routes/Projects";
import Resume from "../routes/Resume";
import Contact from "../routes/Contact";
import { Element } from "react-scroll";

function Navigation() {
  const navRef = useRef(null);
  const navrepositionRef = useRef(null);
  useEffect(() => {
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Change page title to Brian Cho
    document.title = "Brian Cho";
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    // Clean up event listeners when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleResize() {
    // Move navbar to the top when the window.innerHeight is less than 600.
    if (navrepositionRef.current !== null) {
      if (window.innerHeight < 615) {
        navrepositionRef.current.classList.add("top-0");
        navrepositionRef.current.classList.remove("-bottom-8", "absolute");
      } else {
        navrepositionRef.current.classList.remove("top-0");
        navrepositionRef.current.classList.add("-bottom-8", "absolute");
      }
    }
  }

  function handleScroll() {
    // Fix navbar to the top once scrolled past first page (client height)
    console.log(this.navRef.current);
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
  }

  return (
    <div>
      <div
        className="fixed absolute z-50 flex w-full h-16 shadow -bottom-16"
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

export default Navigation;
