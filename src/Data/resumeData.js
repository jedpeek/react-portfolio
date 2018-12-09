import React, { Component } from 'react';
import Header from '../components/header/header';
class HeaderData extends Component {
  constructor(props){
    super(props)
      this.state = {
      loadContent: false,
      imagebaseurl: "http://localhost:3000/",
      name:"YOUR NAME",
      location: "San Diego",
      role: "REACT DEVELOPER"
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
    let headerView;
    if(this.state.loadContent){
      headerView =
      <div className="row">
        <div class="col-xs-12">
          <form>
            <label for="name">Name</label>
            <input type='text' name="name" onChange={this.handleChange} value={this.state.name}/>

            <label for="location" style={{display: 'inline', margin: '2px'}}>Location</label>
            <input type='text' name="location" onChange={this.handleChange} value={this.state.location}/>

            <label for="role" style={{display: 'inline', margin: '2px'}}>Role</label>
            <textarea cols={50} rows={5} onChange={this.handleChange} name="description" value={this.state.role}/>
            <input type="submit" handleSubmit={this.handleSubmit}/>
          </form>
        </div>
      </div>
    } else headerView = <Header headerData={this.state}/>
    return (
      <div>
        <button type="submit" name="view" onClick={this.handleView} style={{marginTop: '60px'}}>Header View</button>
        {headerView}
      </div>
    );
  }
}

export default HeaderData;
