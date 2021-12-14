import React, { Component, createRef } from 'react';
import { render } from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import About from './routes/About';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import Contact from './routes/Contact';
import { Link, Element } from "react-scroll";


class App extends Component {
  constructor(props){
    super(props);
    this.navRef = createRef();
    this.state = {
      data:[],
    }
  }

componentDidMount() {
  // Chnage page title to Brian Cho
  // Scroll to stop when page loaded
  document.title = "Brian Cho"
  window.addEventListener("scroll", this.handleScroll);
}

componentWillMount(){
}

handleScroll = () => {
  const winScroll =
  document.body.scrollTop || document.documentElement.scrollTop
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const scrolled = winScroll
  if (winScroll>document.documentElement.clientHeight){
    this.navRef.current.classList.add('fixed', 'top-0');

  } else {
    this.navRef.current.classList.remove('fixed','top-0');
  }
}


render(){
  return (
    <div className="flex flex-col">
      <div className="absolute fixed -bottom-8 z-50">
      <nav ref={ this.navRef }className="flex">
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true}
            offset={0} duration={500} onSetActive={this.handleSetActive}>
          Brian Cho
        </Link>
        </li>
        <li>
          <Link activeClass="active" to="projects" spy={true} smooth={true}
            offset={0} duration={500} onSetActive={this.handleSetActive}>
          Projects</Link>
        </li>

        <li>
          <Link activeClass="active" to="resume" spy={true} smooth={true}
            offset={50} duration={500} onSetActive={this.handleSetActive}>
          Resume</Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true}
            offset={50} duration={500} onSetActive={this.handleSetActive}>
          Contact</Link>
        </li>
      </nav>
      </div>
      <Element name='about' className='element'>
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
