import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-lg-4 ms-auto">
          <h2 className="section-heading" style={{ textAlign: "center" }}>
            About Me
          </h2>
          <p className="lead">
            Hi! Im Eric, a dynamic and driven Software Engineer with a passion
            for leveraging cutting-edge technologies to develop innovative
            solutions.
          </p>
        </div>
        <div className="col-lg-4 me-auto">
          <p className="lead">
            Eager to contribute my solid foundation in programming languages and
            software development methodologies to a collaborative team
            environment. Seeking an opportunity to further enhance my skills and
            knowledge while making meaningful contributions to impactful
            projects in the software engineering field.
          </p>
        </div>
      </div>
      {/* About Section Button*/}
      <div className="container text-center mt-4">
        <a
          className="btn btn-xl btn-outline-light"
          href="https://github.com/ea33064"
          style={{ textAlign: "center" }}
        >
          View my GitHub!
        </a>
      </div>
    </section>
  );
};

export default About;
