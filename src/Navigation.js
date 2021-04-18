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
        <div className="mobile">
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
          <div className="hero-Image">
            <img src="https://i.vgy.me/OmzKhK.jpg" alt="building" />
          </div>
          <div className='hero-text'>
          <h1>Stainless Reputation</h1>
          <p>We’ve earned an outstanding reputation for our quality work and our integrity in dealing with clients, architects, suppliers, and subcontractors.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;