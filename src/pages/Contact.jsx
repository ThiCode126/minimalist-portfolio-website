import React from "react";
import { ReactComponent as GitHubSVG } from "../assets/icons/github.svg";
import { ReactComponent as TwitterSVG } from "../assets/icons/twitter.svg";
import { ReactComponent as LinkedinSVG } from "../assets/icons/linkedin.svg";
import Form from "../components/Contact/Form";

const Contact = () => {
  return (
    <section id="contact">
      <div className="cw">
        <div className="hero">
          <h2>Get In Touch</h2>
          <div className="body">
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <div className="social">
              <GitHubSVG />
              <TwitterSVG />
              <LinkedinSVG />
            </div>
          </div>
        </div>
        <div className="form-contact">
          <h2>Contact Me</h2>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
