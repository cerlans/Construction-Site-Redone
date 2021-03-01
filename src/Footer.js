import React, { useState } from 'react';
import ContactForm from './ContactForm.js'
function Footer(){
  return (
    <>
      <div className='footer'>
        <div className='text' >
        <h1><span style={{color:'#FF7900'}}>LEX</span> Construction Company</h1>
        <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit ametLorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
        </div>
        <div className='contact-methods'>
        <div className='sub-parent'>
        <div><h3>Address</h3></div>
        <div>24 Crystal lane Road, Florida</div>
        </div>
         <div className='sub-parent'>
        <div><h3>Phones</h3></div>
         <div>
          <span>+ 1-203-4058-49123</span>
          <span>+ 1-203-4058-49123</span>
          </div>
        </div>
           <div className='sub-parent'>
        <div><h3>E-mails</h3></div>
         <div>
         <span>tester123@randomemail.com</span>
         <span>tester123@randomemail.com</span>
         </div>
        </div>
        </div>
        <div className='social-links'>
         <div>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-google"></i>
         </div>
        </div>
        <ContactForm/>
      </div>
    </>
  )
}

export default Footer;