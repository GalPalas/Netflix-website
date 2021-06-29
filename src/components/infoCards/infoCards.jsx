import React from "react";

function InfoCards({ title, description, imageSrc, reverse }) {
  return (
    <section className="bg-dark text-light p-5 text-center text-lg-start">
      <div className="container">
        {reverse ? (
          <div className="d-lg-flex flex-row-reverse align-items-center justify-content-center">
            <div className="px-3">
              <h1 className="mb-3">{title}</h1>
              <h2>{description}</h2>
            </div>
            <img src={imageSrc} alt="" className="image-fluid w-50"></img>
          </div>
        ) : (
          <div className="d-lg-flex align-items-center justify-content-center">
            <div className="px-3">
              <h1 className="mb-3">{title}</h1>
              <h2>{description}</h2>
            </div>
            <img src={imageSrc} alt="" className="image-fluid w-50"></img>
          </div>
        )}
      </div>
      <hr></hr>
    </section>
  );
}

export default InfoCards;