import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// COMPONENTS
import Header from './components/header/header';
import About from './components/about/about';
import Education from './components/resume/education';
import Project from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Login from './containers/Login'
import NavBar from './components/navbar'
// DATA
import HeaderData from './Data/resumeData'
import AboutData from './Data/aboutData'


class App extends Component {
  render() {
    return (
    <div className="App">
        <HeaderData />
        <AboutData />
        <Education />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
