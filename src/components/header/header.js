import React, { Component, Fragment } from 'react';
// import InteractiveDemo from './InteractiveDemo';
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
// <div className="container">
//   <div className="row mt-5">
//     <div className="col-md-8 offset-md-2">
//       <InteractiveDemo audioContext={audioContext} soundfontHostname={soundfontHostname} />
//     </div>
//   </div>
// </div>
export default class Header extends Component {
  state ={
    showPiano: false
  }
  handleClick = ()=>{
    this.state.showPiano ? this.setState({showPiano: false }) : this.setState({showPiano: true })
  }
  render() {
      let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {
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
            <h1 className="responsive-headline">{resumeData.name}</h1>
            <h3 className="header-description">
                I am a {resumeData.location} based <span>{resumeData.role}</span><br/>
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
      </header> }
      </React.Fragment>
    );
  }
}
