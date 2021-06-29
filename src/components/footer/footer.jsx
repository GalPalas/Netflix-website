import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section id="contact" className="bg-dark text-light p-5 position-relative">
      <div className="container">
        <div className="row">
          <p className="lead">Questions? Contact us.</p>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="link-danger footer-link">FAQ</p>
            <p className="link-danger footer-link">Investor Relations</p>
            <p className="link-danger footer-link">Privacy</p>
            <p className="link-danger footer-link">Speed Test</p>
          </div>
          <div className="col-sm">
            <p className="link-danger footer-link">Help Center</p>
            <p className="link-danger footer-link">Jobs</p>
            <p className="link-danger footer-link">Cookie Preferences</p>
            <p className="link-danger footer-link">Legal Notices</p>
          </div>
          <div className="col-sm">
            <p className="link-danger footer-link">Account</p>
            <p className="link-danger footer-link">Ways to Watch</p>
            <p className="link-danger footer-link">Corporate Information</p>
            <p className="link-danger footer-link">Netflix Originals</p>
          </div>
          <div className="col-sm">
            <p className="link-danger footer-link">Media Center</p>
            <p className="link-danger footer-link">Terms of Use</p>
            <p className="link-danger footer-link">Contact Us</p>
          </div>
        </div>
        <a
          href="/#"
          className="p-5 position-absolute end-0 bottom-0 text-danger"
        >
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </section>
  );
}

export default Footer;
