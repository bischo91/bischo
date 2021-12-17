import React from "react";
import axios from 'axios';
// const API_PATH = 'http://localhost:3000/sendemail.php';
class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
  lname: '',
  email: '',
  message: '',
  mailSent: false,
  error: null


      };
    }

    // <ContactForm />
  render() {
      return (
        <div className="w-5/6 h-full mt-24 m-auto bg-primary min-h-screen">
                CONTACT ME
        </div>
        );

  }
}

export default Contact;
