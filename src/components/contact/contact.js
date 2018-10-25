import React, { Component, Fragment } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">
            Feel free to reach out to me with ideas for blog posts, podcasts, or projects.
            If you have any material you think I might like to checkout<b> send me a link. </b>
            Any feedback on my portfolio projects is always welcome. <b>Thanks</b>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form id="contactForm" name="contactForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contactForm" />
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" defaultValue size={35} id="contactName" name="contactName" placeholder="Name" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="email" defaultValue size={35} id="contactEmail" name="contactEmail" placeholder="Email"  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject"  placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={5} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_tweets">
              <a class="twitter-timeline" href="https://twitter.com/JedPeek?ref_src=twsrc%5Etfw"
               data-chrome="nofooter noborders transparent" data-tweet-limit="3" data-theme='dark'></a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </aside>
        </div>
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}
