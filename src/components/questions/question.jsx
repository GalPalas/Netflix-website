import React from "react";

function Question({ title, descOne, descTwo, target, id }) {
  return (
    <div
      className="accordion accordion-flush accordion-button-dark"
      id="questions"
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed fs-3 bg-dark text-light mt-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={target}
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {title}
          </button>
        </h2>
        <div
          id={id}
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#questions"
        >
          <div className="accordion-body bg-dark text-light">
            <span className="lead">
              {descOne}
              <br></br>
              <br></br>
              {descTwo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
