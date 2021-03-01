import React, { useState } from 'react';

function ContactForm(){
  return (
    <>
    <div className='contact-form'>
    <h1>Questions? Contact Us</h1>
    <form>
      <input type='text' placeHolder='Name'/>
      <input type='text' placeHolder='Email-Address'/>
      <textarea placeHolder='Your message here'></textarea>
    </form>
    <button> Send Message</button>
    </div>
    </>
  )
}

export default ContactForm