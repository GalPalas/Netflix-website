import React from "react";
import "./showcase.css";

function Showcase() {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              <span className="text-danger">Unlimited</span> movies, TV shows,
              and more.
            </h1>

            <p className="lead my-4">Watch anywhere. Cancel anytime.</p>
            <button
              className="btn btn-outline-danger btn-lg showcase-button"
              data-bs-toggle="modal"
              data-bs-target="#trial"
            >
              Start Free Trial
            </button>
          </div>
          <img
            className="image-fluid w-50 d-none d-sm-block"
            src="/images/undraw_netflix_q00o.svg"
            alt=""
          ></img>
        </div>
      </div>

      <div
        className="modal fade text-light"
        id="trial"
        tabIndex="-1"
        aria-labelledby="trialLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content aaa">
            <div className="modal-header">
              <h3 className="modal-title" id="trialLabel">
                Sign Up
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mb-4">
              <form>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="col-form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-dark">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
