import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-lg-4 ms-auto">
          <h2 className="section-heading" style={{ textAlign: "center" }}>
            About this app
          </h2>
          <p className="lead">
            Hi! My Todos app is a simple and intuitive to-do list application
            that allows users to manage their tasks with ease. With features
            like adding, marking as complete, and deleting tasks, this Todos app
            is a reliable tool for staying organized and managing daily tasks.
          </p>
        </div>
        <div className="col-lg-4 me-auto">
          <p className="lead">
            The app includes a contact page for users to get in touch with us
            for any questions or feedback. We hope you find our app helpful and
            easy to use, and we welcome any suggestions or comments you may
            have. Thank you for choosing my Todos app! Click the link below to
            view my GitHub.
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
