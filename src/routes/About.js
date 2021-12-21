import React from "react";
import profile_pic from "../images/profile.png";
import profile_animated from "../images/profile_animated.png";
import { Link } from "react-scroll";

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
    if (window.innerHeight < 720 && window.innerWidth > 639) {
      this.scrollArrow.current.classList.add("hidden");
    } else{
      this.scrollArrow.current.classList.remove("hidden");
    }
  };

  render() {
    return (
      <div className="w-full min-h-screen h-full bg-primary">
        <div className="flip m-auto mt-20 h-56 w-56 sm:w-96 sm:h-96"
            onClick={()=>(document.getElementById("flipProfile").classList.toggle("flip"))}
            id="flipProfile"
            >
          <div
            className="flip-content">
            <div className="flip-front">
              <img src={profile_animated} alt="" className="w-full" />
            </div>
            <div className="flip-back">
              <img src={profile_pic} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="bg-primary h-full mx-4 mt-24 sm:mt-16">
          <p className="text-center text-primary text-sm sm:text-lg md:text-xl lg:text-2xl">
            Hello World! <br></br>
            I'm Brian.<br></br>
            I'm an enthusiastic developer and an engineer<br></br>
          </p>
        </div>
        <div className="bottom-0 absolute h-1/6 w-screen" ref={this.scrollArrow}>
          <section className="absolute left-1/2 bottom-24 scroll-arrow flex flex-col">
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
