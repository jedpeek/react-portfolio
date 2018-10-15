import React, { Component, Fragment } from 'react';
import {Grid, Row, Col, code } from 'react-bootstrap'
export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="project">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12} lg={12}>
              <h1></h1>
            </Col>
            <Col xs={12} md={8} lg={4}>
              <code>
                <div id="modal-01" className="popup-modal ">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
                  <div className="description-box">
                    <h4>Coffee Cup</h4>
                    <p>Ruby on Rails application that allows users to login and share starbucks secret recipes.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                  </div>
                  <div className="link-box">
                    <a href="https://github.com/jedpeek/sbux-secret-menu-rails">GITHUB</a>
                    <a className="popup-modal-dismiss" onClick={this.handleClick}>Close</a>
                  </div>
                </div>
              </code>
            </Col>{/* PROJECT 1 END */}

            <Col xs={12} md={8} lg={4}>
              <code>
                <div id="modal-02" className="popup-modal">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
                  <div className="description-box">
                    <h4>Console</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>
              </code>
            </Col>{/* PROJECT 2 END */}

            <Col xs={12} md={8} lg={4}>
              <code>
                <div id="modal-03" className="popup-modal">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
                  <div className="description-box">
                    <h4>Judah</h4>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    <span className="categories"><i className="fa fa-tag" />Branding</span>
                  </div>
                  <div className="link-box">
                    <a href="http://www.behance.net">Details</a>
                    <a className="popup-modal-dismiss">Close</a>
                  </div>
                </div>
              </code>
            </Col>{/* PROJECT 3 END */}
          </Row>
        </Grid>
      </section>
    </React.Fragment>
    );
  }
}
