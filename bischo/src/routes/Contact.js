import React from "react";
import ContactForm from "./ContactForm";

class Contact extends React.Component {

  render() {
    return (
      <div className="w-5/6 md:w-2/3 h-full mt-24 m-auto bg-primary min-h-screen">
        <div className="w-full h-full m-auto bg-secondary flex-col flex rounded-lg">
          <h1 className="flex text-primary mx-12 py-6 text-4xl">Contact Me</h1>
          <h3 className="flex text-secondary mx-12 px-2 text-xl">
            Please feel free to contact me!
          </h3>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
