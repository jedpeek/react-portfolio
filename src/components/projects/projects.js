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
                    <h4>
                      Sbux Secret Menu
                      <a href="https://github.com/jedpeek/sbux-secret-menu-rails"><span className='fa fa-github fa-pad'/></a>
                    </h4>
                    <p>Ruby on Rails application that allows users to login and share Starbucks secret recipes</p>
                  </div>
                </div>
              </code>
            </Col>{/* PROJECT 1 END */}

            <Col xs={12} md={8} lg={4}>
              <code>
                <div id="modal-02" className="popup-modal">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
                  <div className="description-box">
                    <h4>
                      React-Graph Store
                      <a href="https://github.com/jedpeek/sbux-secret-menu-rails"><span className='fa fa-github fa-pad'/></a>
                    </h4>
                    <p>React based online store using MongoDB and GraphQL backend and stripe for payment authorization</p>
                  </div>
                </div>
              </code>
            </Col>{/* PROJECT 2 END */}

            <Col xs={12} md={8} lg={4}>
              <code>
                <div id="modal-03" className="popup-modal">
                  <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
                  <div className="description-box">
                    <h4>
                      Electron SongWriter
                      <a href="https://github.com/jedpeek/sbux-secret-menu-rails"><span className='fa fa-github fa-pad'/></a>
                    </h4>
                    <p>Desktop app built using Electron to allow songwriters to write lyrics and record short melodies</p>

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
