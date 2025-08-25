import React from "react";

class Resume extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="relative flex-col w-full min-h-screen mx-auto mt-24 overflow-hidden sm:w-3/4 text-primary bg-primary">
        <h1 className="px-2 mb-8 font-mono text-4xl">RESUME</h1>
        <div className="space-y-4 sm:-ml-4 row">
          <iframe
            //src="https://drive.google.com/file/d/1QW0Az1AvOdzulRqyY0XDTCKrFNTMl__9/preview"
            src="https://drive.google.com/file/d/126WzPb31tmKBxZQhxpsKpio-drWcsEvI/view?usp=sharing"
            className="w-[90vw] aspect-[2/3] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] max-h-screen"
            title="resume"
          />
        </div>
      </div>
    );
  }
}

export default Resume;
