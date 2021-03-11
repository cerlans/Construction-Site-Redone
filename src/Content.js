import React from "react";
import Gallery from "./Gallery.js";
import Testimonial from "./Testimonial.js";
function Content() {
  return (
    <>
      <section className="services">
        <div className="img-cont">
          <img src="https://images.unsplash.com/photo-1614728958368-62f3dccc822f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </div>
        <div className="cards">
          <div className="card">
            <h1>HIGH-QUALITY SERVICES</h1>
            <button>View More</button>
          </div>
          <div className="card">
            <div className="icon">
              <i class="far fa-building"></i>
              <h3>Construction Services</h3>
            </div>
            <div className="content">
              <p>
                We provide high-quality construction services to a wide variety
                of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <i class="fas fa-comments"></i>
              <h3>Consultations</h3>
            </div>
            <div className="content">
              <p>
                We provide high-quality construction services to a wide variety
                of clients.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <i class="fas fa-pencil-ruler"></i>
              <h3>Interior-design</h3>
            </div>
            <div className="content">
              <p>
                We provide high-quality construction services to a wide variety
                of clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <h1>Latest - Projects</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua."{" "}
        </p>
        <Gallery />
        <div className="experience">
          <span>20</span>
          <h1>Years of experience</h1>
          <p>
            With over 20 years of experience and established in Norwalk,
            Connecticut, we are the premier construction lorem ipsum dolor sit
            ametWith over 20 years of experience and established in Norwalk,
            Connecticut, we are the premier construction lorem ipsum dolor sit
            amet
          </p>
          <button>Get in Touch</button>
        </div>
      </section>
      <section className="testimonial">
        <Testimonial />
      </section>
    </>
  );
}

export default Content;
