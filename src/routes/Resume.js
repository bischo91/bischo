import React from "react";
import resume from "../images/resume.jpg";
import resume_pdf from "../pdf/resume.pdf";

class Resume extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="w-5/6 h-full mt-24 m-auto bg-primary min-h-screen text-primary">
        <h1 className="text-4xl mb-8">RESUME</h1>
        <div className="row space-y-4 mt-8">
          <a href={resume_pdf} target="_blank" rel="noopener noreferrer">
            <img
              src={resume}
              alt="Resume"
              className="max-w-max w-full m-auto"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;
