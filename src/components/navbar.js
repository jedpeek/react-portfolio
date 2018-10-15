import React, { Component, Fragment } from 'react';
  export default class NavBar extends Component {
    render() {
        let resumeData = this.props.resumeData
      return (
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#education">Education</a></li>
            <li><a className="smoothscroll" href="#project">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        )
      }
  }
