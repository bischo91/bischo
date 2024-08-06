import ContactForm from "./ContactForm";
import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="w-5/6 h-full min-h-screen m-auto mt-24 overflow-hidden md:w-2/3 bg-primary">
        <div className="flex flex-col w-full h-full m-auto rounded-lg bg-secondary">
          <h1 className="flex py-6 mx-12 font-mono text-4xl text-primary">
            Contact Me
          </h1>
          <h3 className="flex px-2 mx-12 text-xl text-secondary">
            Please feel free to contact me!
          </h3>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
