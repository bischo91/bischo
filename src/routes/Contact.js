import React, { createRef } from "react";
import ScrollToTop from '../components/ScrollToTop';
import { Link, HashRouter, Route } from "react-router-dom";
import Navigation from "../components/Navigation";

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      };
    }
  componentDidMount(){
  }

  render() {
      return (
        <div className="min-h-screen relative block top-96 w-full">
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
