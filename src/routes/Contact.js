import React from "react";

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      };
    }

  render() {
      return (
        <div className="w-5/6 h-full mt-24 m-auto bg-primary min-h-screen">
          <h1>Contact Me</h1>
          <p>Please feel free to contact me for any inquiry.</p>
          <p>Email: bischo91@gmail.com</p>
          <p>Phone: </p>
          <p>Email: </p>
        </div>
        );

  }
}

export default Contact;
