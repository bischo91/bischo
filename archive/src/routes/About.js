import { Link } from "react-scroll";
import React from "react";
import profile_animated from "../asset/profile_animated.png";
import profile_pic from "../asset/profile.png";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.scrollArrow = React.createRef();
  }

  componentDidMount() {
    // Change page title
    document.title = "Brian Cho";
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Fetch data from API defined by admin
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    // Hide scroll arrow when the window is too small
    if (this.scrollArrow.current !== null) {
      if (window.innerHeight < 720 && window.innerWidth > 639) {
        this.scrollArrow.current.classList.add("hidden");
      } else if (window.innerHeight < 615) {
        this.scrollArrow.current.classList.add("hidden");
      } else {
        this.scrollArrow.current.classList.remove("hidden");
      }
    }
  };

  render() {
    return (
      <div className="w-full h-full min-h-screen overflow-hidden bg-primary">
        <div
          className="w-56 h-56 m-auto mt-20 flip sm:w-96 sm:h-96"
          onClick={() =>
            document.getElementById("flipProfile").classList.toggle("flip")
          }
          id="flipProfile"
        >
          <div className="flip-content">
            <div className="flip-front">
              <img src={profile_animated} alt="" className="w-full" />
            </div>
            <div className="flip-back">
              <img src={profile_pic} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="h-full mx-4 mt-24 bg-primary sm:mt-16">
          <p className="font-mono text-sm text-center text-primary sm:text-lg md:text-xl lg:text-2xl">
            Hello World! <br></br>
            I'm Brian.<br></br>
            I'm an enthusiastic developer and an engineer<br></br>
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-1/6" ref={this.scrollArrow}>
          <section className="absolute flex flex-col left-1/2 bottom-24 scroll-arrow">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
              className="cursor-pointer"
            >
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
