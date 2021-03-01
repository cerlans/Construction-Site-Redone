import React, { useState } from 'react';

function Footer(){
  return (
    <>
      <div className='footer'>
        <div className='text' >
        <h1>Gex Construction Company</h1>
        <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit ametLorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
        </div>
        <div className='contact-methods'>
        <div className='sub-parent'>
        <div><h3>Address</h3></div>
        <div>24 Crystal lane Road, Florida</div>
        </div>
         <div className='sub-parent'>
        <div><h3>Phones</h3></div>
        <div>1-203-4058-49123</div>
        <div>1-203-4058-49123</div>
        </div>
           <div className='sub-parent'>
        <div><h3>E-mails</h3></div>
         <div>tester123@randomemail.com</div>
         <div>tester123@randomemail.com</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer;