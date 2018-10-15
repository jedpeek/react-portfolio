import React, { Component, Fragment } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="home">
          <span><a href="https://www.facebook.com/jed.peek" target='_blank'><i className="fa fa-facebook fa-pad" /></a></span>
          <span><a href="https://twitter.com/JedPeek" target='_blank'><i className="fa fa-twitter fa-pad" /></a></span>
          <span><a href="https://www.linkedin.com/in/jed-peek/" target='_blank'><i className="fa fa-linkedin fa-pad" /></a></span>
          <span><a href="https://www.instagram.com/jedmrkts/" target='_blank'><i className="fa fa-instagram fa-pad" /></a></span>
        </footer>
      </React.Fragment>
    );
  }
}
