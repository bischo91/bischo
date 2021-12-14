import React from "react";
import profile_pic from "../images/profile.png";
import profile_animated from "../images/profile_animated.png";
import ScrollToTop from '../components/ScrollToTop';
import { Link, HashRouter, Route } from "react-router-dom";
import Navigation from "../components/Navigation";

class About extends React.Component{
  constructor(props) {
    super(props);
    this.profileImageRef = React.createRef();
    this.state = {
      };
    }

  componentDidMount(){
    // Change page title
    document.title = "Brian Cho"
    // Scroll to stop when page loaded
    window.scrollTo(0, 0)
    // Fetch data from API defined by admin
  }

  componentWillReceiveProps(){
    // Scroll to stop when page loaded
    window.scrollTo(0, 0)
  }

  flipimg(){
    // Flip image when hovered in/out
    this.profileImageRef.current.classList.toggle('flipped');
  }

  render() {
    return (
        <div className="block w-full min-h-screen relative bg-primary">
          <div className="flip relative top-10 z-40">
            <div ref={this.profileImageRef}
              className="flip-image"
              onMouseOver={() => this.flipimg()}
              onMouseOut={() => this.flipimg()}>
              <img src={profile_animated} alt="Brian Cho" className="profile-front profile-img"/>
              <img src={profile_pic} alt="" className="profile-back profile-img"/>
            </div>
          </div>
          <div className="bg-primary h-full relative top-96 block justify-around">
            <p className="font-mono text-center text-secondary text-lg">
              Hello World! <br></br>
              I'm Brian.<br></br>
              I'm an enthusiastic developer and an engineer<br></br>
              This is a demo website.
            </p>
          </div>
        </div>
        );

  }
}

export default About;
