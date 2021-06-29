import React from "react";
import "./newsletter.css";

function Newsletter() {
  return (
    <section className="bg-danger text-light p-5">
      <div className="container">
        <div className="d-md-flex align-items-center justify-content-between">
          <h4 className="mb-3 mb-md-0">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              onClick="input.blur()"
            ></input>
            <span className="bg-dark text-light btn-lg input-group-text">
              Get Started
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
