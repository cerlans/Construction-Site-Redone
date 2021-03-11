import React, { useState } from "react";
import ContactForm from "./ContactForm.js";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div>
            <h2><span>Lex</span> Contractors</h2>
            <p>
              We are an industry-leading and award-winning construction services
              provider ready to work on a project of any complexity, whether
              its commercial or residential.
            </p>
          </div>
          <div className='contact-links'>
            <h3>Emails</h3>
            <span>info@demolink.org, mail@demolink.org</span>
          </div>
          <div className='contact-links'>
            <h3>Address</h3>
            <span>4730 Crystal Springs Dr, Los Angeles, CA 90027</span>
          </div>
          <div className='contact-links'>
            <h3>Phones</h3>
            <span>+1 323-913-4688, +1 323-888-4554 </span>
            
          </div>
        </div>
        <div className="row">
          <h1>Questions? Contact <span>Us</span>!</h1>
          <ContactForm/>
        </div>
        <div className="row">
          <h1>What <span>we</span> Offer!</h1>
          <div>
            <ul>
              <li>General Contracting</li>
              <li>Design Build</li>
              <li>Interior Design</li>
              <li>Pre Construction Services</li>
              <li>Irrigation Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
