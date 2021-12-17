import React, { useRef } from "react";
import ContactUs from "./ContactUs";

class Contact extends React.Component{
  constructor(props) {
    super(props);
      };



  render() {
      return (
        <div className="w-5/6 h-full mt-24 m-auto bg-primary min-h-screen">
          <ContactUs />
        </div>
        );
  }
}

export default Contact;
