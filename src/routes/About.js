import React from "react";
import profile_pic from "../images/profile/profile.png";
import profile_animated from "../images/profile/profile_animated.png";
import { Link, Element } from "react-scroll";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.profileImageRef = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    // Change page title
    document.title = "Brian Cho";
    // Scroll to stop when page loaded
    window.scrollTo(0, 0);
    // Fetch data from API defined by admin
  }

  flipimg() {
    // Flip image when hovered in/out
    this.profileImageRef.current.classList.toggle("flipped");
  }

  render() {
    return (
      <div className="w-full min-h-screen h-full bg-primary">
        <div className="flip m-auto mt-20 h-96 w-96">
          <div className="flip-content">
            <div className="flip-front">
              <img src={profile_animated} alt="" className="w-full" />
            </div>
            <div className="flip-back">
              <img src={profile_pic} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="bg-primary h-full mt-8 mb-12 justify-around">
          <p className="text-center text-primary text-lg">
            Hello World! <br></br>
            I'm Brian.<br></br>
            I'm an enthusiastic developer and an engineer<br></br>
          </p>
        </div>
        <div className="">
          <section className="scroll-arrow flex flex-col">
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
