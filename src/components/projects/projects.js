import React, { Component, Fragment } from 'react';
import {Grid, Row, Col, code } from 'react-bootstrap'
export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="projects">
        <Grid>
          <Row className="show-grid">

            <Col xs={12} >
              <code>
                <div id="modal-01" className="popup-modal ">
                  <img className="scale-with-grid project-img" src="images/sbux.png" alt />
                  <div className="description-box">
                    <h4>
                      Sbux Secret Menu
                      <a href="https://github.com/jedpeek/sbux-secret-menu-rails" target='_blank'><span className='fa fa-github fa-pad'/></a>
                    </h4>
                    <p>Ruby on Rails application that allows users to login and share Starbucks secret recipes</p>
                  </div>
                </div>
              </code>
            </Col>{/* PROJECT 1 END */}

            <Col xs={12} >
              <code>
                <div id="modal-02" className="popup-modal">
                  <img className="scale-with-grid project-img" src="images/peek_audio.jpeg" alt />
                  <div className="description-box">
                    <h4>
                      React-Graph Store
                      <a href="https://github.com/jedpeek/reactStore" target='_blank'><span className='fa fa-github fa-pad'/></a>
                    </h4>
                    <p>React based online store using MongoDB and GraphQL backend and stripe for payment authorization</p>
                  </div>
                </div>
              </code>
            </Col>{/* PROJECT 2 END */}

            <Col xs={12} >
              <code>
                <div id="modal-03" className="popup-modal">
                  <img className="scale-with-grid project-img" src="images/torrey_pines.png" alt />
                  <div className="description-box">
                    <h4>
                      TripReview
                      <a href="https://github.com/jedpeek/ReactTrips" target='_blank'><span className='fa fa-github fa-pad'/></a>
                    </h4>
                    <p>A react/redux application that allows users to review vacation destinations</p>

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
