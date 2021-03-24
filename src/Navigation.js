import React, { useState } from "react";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <div>
          <h1>
            <span className="logo">Lex</span> contractors
          </h1>
        </div>
        <div className='mobile'>
        <i class="fas fa-bars"></i>
        </div>
        <ul className="desktop-nav">
          <li class="hvr-underline-from-center">Home</li>
          <li class="hvr-underline-from-center">About Us</li>
          <li class="hvr-underline-from-center">Gallery</li>
          <li class="hvr-underline-from-center">Blog</li>
          <li class="hvr-underline-from-center">Contact Us</li>
          <li class="hvr-underline-from-center">Pages</li>
          <li>
            <i class="fas fa-search"></i>
          </li>
          <li>
            <i class="fas fa-share-alt"></i>
          </li>
        </ul>
      </nav>
      <section className="Hero">
        <div className="Hero-content">
          <h1 className="animate__animated animate__fadeInLeft">
            STAINLESS REPUTATION
          </h1>
          <p className="animate__animated  animate__fadeInRight">
            At our company, we hire the best and the most committed construction experts who move the industry forward and create great spaces for your life and work
          </p>
          <button
            className="hvr-fade"
            className="animate__animated animate__fadeInUp"
          >
            Learn more
          </button>
          <div className="slides-btn">
            <i
              class="fas fa-circle"
              onClick={() => {
                setCount(0);
              }}
            ></i>
            <i
              class="fas fa-circle"
              onClick={() => {
                setCount(1);
              }}
            ></i>
            <i
              class="fas fa-circle"
              onClick={() => {
                setCount(2);
              }}
            ></i>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Navigation;
