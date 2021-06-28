import React from 'react'
import "./showcase.css"

function Showcase() {
    return (
      
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
            <span className="text-danger">Unlimited</span> movies, TV shows, and more.
            </h1>
            <p className="lead my-4">
            Watch anywhere. Cancel anytime.
            </p>
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
      </section>
    )
}

export default Showcase
