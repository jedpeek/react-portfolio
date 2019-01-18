import React, { Component } from 'react';
import Header from '../components/header/header';
class HeaderData extends Component {
  constructor(props){
    super(props)
      this.state = {
      loadContent: false,
      imagebaseurl: "http://localhost:3000/",
      name:"Jed Peek",
      location: "San Diego",
      role: "WEB DEVELOPER"
    }
  }

  handleChange = (event)=>{
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event)=>{
    return event.preventDefault();
  }

  handleView = (event)=>{
    event.preventDefault();
    if(this.state.loadContent){
      return this.setState({loadContent: false})
    }
    return this.setState({loadContent: true})
  }

  render() {
    return (
        <Header headerData={this.state}/>

    );
  }
}

export default HeaderData;
