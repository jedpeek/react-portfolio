import React, { Component, Fragment } from 'react';
export default class education extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of California, Los Angeles</h3>
                <p className="info">B.A. Degree in Anthropology<span>•</span> <em className="date">Dec 2014</em></p>
                <p>
                My time as an anthropology undergraduate helped develop my academic and professional skills
                in preparation for life after UCLA. It enhanced my ability to think critically, analyze data, and
                expand my worldview.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Flatiron School</h3>
                <p className="info">Certificate in Full Stack Web Development<span>•</span> <em className="date">Oct 2018</em></p>
                <p>
                  Flatiron gave me the expertise in both back-end
                  and front-end programming to become a full-stack web developer.
                  I learned not only the how-to's of programming but also the why's
                  which gave me a more foundational understanding of how the web works.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
      </section>
      </React.Fragment>
    );
  }
}
