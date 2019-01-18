import React, { Component } from 'react';
import About from '../components/about/about';
class AboutData extends Component {
  constructor(props){
    super(props)
      this.state = {
      loadContent: false,
      name:"JED PEEK",
      description: "I am San Diego based Web Developer and Musician. I like building websites using new technologies to build the fastest and most intuitive sites for users",
      primary_email: "jedpeek@gmail.com"
    }
  }
  render() {
    return (
        <About aboutData={this.state}/>
    );
  }
}

export default AboutData;
