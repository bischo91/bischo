import React, { Component, createRef } from 'react';
import { render } from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './routes/About';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import Contact from './routes/Contact';
import { Link, Element } from "react-scroll";


class App extends Component {
  constructor(props){
    super(props);
    this.navRef = createRef();
    this.navrepositionRef = createRef();
    this.state = {
      data:[],
    }
  }

componentDidMount() {
  window.onbeforeunload= function(){
    window.scrollTo(0, 0);
  }
  // Chnage page title to Brian Cho
  // Scroll to stop when page loaded
  document.title = "Brian Cho"
  window.addEventListener("scroll", this.handleScroll);
  window.addEventListener("resize", this.handleResize);
  this.handleResize();
}


componentWillMount(){
}

handleResize = () => {
  // Move navbar to the top when the window.innerHeight is less than 600.
  if (window.innerHeight<600){
    this.navrepositionRef.current.classList.add('top-0');
    this.navrepositionRef.current.classList.remove('-bottom-8', 'absolute')
  } else {
    this.navrepositionRef.current.classList.remove('top-0');
    this.navrepositionRef.current.classList.add('-bottom-8', 'absolute')
  }
}

handleScroll = () => {
  // Fix navbar to the top once scrolled past first page (client height)
  const winScroll =
  document.body.scrollTop || document.documentElement.scrollTop
  if (winScroll>document.documentElement.clientHeight){
    this.navRef.current.classList.add('fixed', 'top-0');
    // Fix navbar to the top
  } else {
    this.navRef.current.classList.remove('fixed','top-0');
    // Unfix navbar from the top
  }
}

render(){
  return (
    <div className="flex flex-col bg-primary">
      <div className="absolute flex fixed -bottom-16 z-50 shadow w-full" ref = { this.navrepositionRef }>
        <nav
          ref={ this.navRef }className="bg-secondary h-16 flex w-full" id ="navId">
          <ul className="text-primary list-none m-auto flex w-full justify-around items-center">
            <li>
              <Link activeClass="active" to="about" spy={true} smooth={true}
                offset={0} duration={500} onSetActive={this.handleSetActive}>
              Brian Cho
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="projects" spy={true} smooth={true}
                offset={0} duration={500} onSetActive={this.handleSetActive}>
              Projects
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="resume" spy={true} smooth={true}
                offset={0} duration={500} onSetActive={this.handleSetActive}>
              Resume
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true}
                offset={0} duration={500} onSetActive={this.handleSetActive}>
              Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Element name='about' className='element' id='aboutId'>
          <About />
      </Element>
      <Element name='projects' className='element'>
          <Projects />
      </Element>
      <Element name='resume' className='element'>
          <Resume />
      </Element>
      <Element name='contact' className='element'>
          <Contact />
      </Element>

  </div>
    );
  }
}

export default App;
