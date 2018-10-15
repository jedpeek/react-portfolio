import React, { Component, Fragment } from 'react';
export default class About extends Component {
  render() {
    let about = this.props.aboutData
    return (
      <React.Fragment>
            <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="images/jed_photo.jpg" alt />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>
                    {about.description}
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span>{about.name}</span><br />
                        <span>{about.phone_number}</span><br />
                        <span>{about.primary_email}</span>
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a href="https://docs.google.com/document/d/12ij2dSYKVWpVaQ8YUCirr36F46s7S9LXwrNtX9-vtKo/export?format=doc" className="button"><i className="fa fa-download" />Download Resume</a>
                      </p>
                    </div>
                  </div> {/* end row */}
                </div> {/* end .main-col */}
              </div>
            </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}
