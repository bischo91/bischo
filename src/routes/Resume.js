import React from "react";
import resume from "../images/resume.jpg";
// import resume_pdf from "../pdf/resume.pdf";
// href={resume_pdf}

class Resume extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="w-5/6 md:w-2/3 h-full mt-24 m-auto bg-primary min-h-screen text-primary">
        <h1 className="text-4xl mb-8">RESUME</h1>
        <div className="row space-y-4 mt-8">
          <a
            href="https://drive.google.com/file/d/1ldU8aXJpr4alfu2B1VkgUHWCFhmO4Wz7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
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
