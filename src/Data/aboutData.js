import React, { Component } from 'react';
import About from '../components/about/about';
class AboutData extends Component {
  constructor(props){
    super(props)
      this.state = {
      loadContent: false,
      name:"YOUR NAME",
      description: "A summary about yourself",
      phone_number: "555-555-5555",
      primary_email: "example@email.com"
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
    let aboutView;
    if(this.state.loadContent){
      aboutView =
      <div className="row">
        <div class="col-xs-12">
          <form>
            <label for="name">Name</label>
            <input type='text' name="name" onChange={this.handleChange} value={this.state.name}/>
            <label for="phone_number" style={{display: 'inline', margin: '2px'}}>Phone Number</label>
            <input type='text' name="phone_number" onChange={this.handleChange} value={this.state.phone_number}/>
            <label for="primary_email" style={{display: 'inline', margin: '2px'}}>Email</label>
            <input type='email' name="primary_email" onChange={this.handleChange} value={this.state.primary_email}/>
            <label for="description" style={{display: 'inline', margin: '2px'}}>Description</label>
            <textarea cols={50} rows={5} onChange={this.handleChange} name="description" value={this.state.description}/>
            <input type="submit" handleSubmit={this.handleSubmit}/>
          </form>
        </div>
      </div>
    } else {aboutView = <About aboutData={this.state}/>}
    return (
      <div>
        <button type="submit" name="view" onClick={this.handleView}>View</button>
        {aboutView}
      </div>
    );
  }
}
// const aboutData = {
//   "name": AboutData.state.name ,
//   "description": AboutData.state.descrption,
//   "primary_number": AboutData.state.primary_number,
//   "primary_email": AboutData.state.primary_email
//   }
export default AboutData;
