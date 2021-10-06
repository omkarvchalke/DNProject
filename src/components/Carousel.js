import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a
              href="https://theconversation.com/key-workers-dedication-takes-a-toll-on-their-families-heres-what-employers-should-do-about-it-154211"
              target="_blank"
            >
              <img
                className="d-block w-100 img-fluid"
                src="https://images.theconversation.com/files/383274/original/file-20210209-17-tn8snf.jpg?ixlib=rb-1.1.0&rect=49%2C843%2C6496%2C3248&q=45&auto=format&w=1356&h=668&fit=crop"
                alt="First slide"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://theconversation.com/covid-19-costs-could-push-hospitals-to-rethink-billions-of-dollars-in-wasted-supplies-154328"
              target="_blank"
            >
              <img
                className="d-block w-100 img-fluid"
                src="https://images.theconversation.com/files/385934/original/file-20210223-16-14962ps.jpg?ixlib=rb-1.1.0&rect=60%2C402%2C6720%2C3360&q=45&auto=format&w=1356&h=668&fit=crop"
                alt="Second slide"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://theconversation.com/covid-19-hotel-quarantine-exemption-for-essential-medical-travel-confuses-doctors-patients-155632"
              target="_blank"
            >
              <img
                className="d-block w-100 img-fluid"
                src="https://images.theconversation.com/files/386485/original/file-20210225-17-1the6o1.JPG?ixlib=rb-1.1.0&rect=0%2C0%2C4508%2C2254&q=45&auto=format&w=1356&h=668&fit=crop"
                alt="Third slide"
              />
            </a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
