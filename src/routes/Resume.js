import React from "react";
import resume from "../asset/resume.jpg";

class Resume extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="w-5/6 h-full min-h-screen m-auto mt-24 md:w-2/3 bg-primary text-primary">
        <h1 className="mb-8 font-mono text-4xl">RESUME</h1>
        <div className="mt-8 space-y-4 row">
          <a
            href="https://drive.google.com/file/d/1N1kal9F4D_Z0rSWkmzuM9w2KE2ardnGn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={resume}
              alt="Resume"
              className="w-full m-auto xl:w-2/3 2xl:w-1/2"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;
