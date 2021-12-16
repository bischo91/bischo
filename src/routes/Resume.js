import React from "react";
import resume from "../images/resume.jpg";

class Resume extends React.Component{
  componentDidMount(){
  }

  render() {
      return (
        <div className="w-5/6 h-full mt-24 m-auto bg-primary min-h-screen">
          <h1>RESUME</h1>
          <div className="row space-y-4 mt-8">
            <img
              className="max-w-max w-full m-auto"
              src={resume}
              alt="Resume"/>
          </div>

        </div>
        );

  }
}

export default Resume;
