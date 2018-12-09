import React, { Component, Fragment } from 'react';
export default class Header extends Component {
  render() {
    let headerData = this.props.headerData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Education</a></li>
              <li><a className="smoothscroll" href="#projects">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{headerData.name}</h1>
              <h3 className="header-description">
                  I am a {headerData.location} based <span>{headerData.role}</span><br/>
                  With a passion for creative and intutive design
              </h3>
              <hr />
              <ul className="social">
                {/*<li><a href="https://www.facebook.com/jed.peek" target='_blank'><i className="fa fa-facebook" /></a></li>*/}
                <li><a href="https://twitter.com/JedPeek" target='_blank'><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/jed-peek/" target='_blank'><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.github.com/jedpeek" target='_blank'><i className="fa fa-github" /></a></li>
              {/*  // <li><a href="https://www.instagram.com/jedmrkts/" target='_blank'><i className="fa fa-instagram" /></a></li>*/}
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about" ><i className="icon-down-circle" onClick={this.handleClick}/></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
