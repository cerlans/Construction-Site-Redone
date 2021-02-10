import React from 'react';

function Content (){
  return(
    <>
    <section className='services'>
    <div className='card'>
    <h1>HIGH-QUALITY SERVICES</h1>
    </div>
    <div className='card'>
        <div className='icon'>
        <i class="far fa-building"></i>
        <h3>Construction Services</h3>
        </div>
        <div className='content'>
        <p>We provide high-quality construction services to a wide variety of clients.</p>
        </div>
    </div>
      <div className='card'>
        <div className='icon'>
        <i class="fas fa-comments"></i>
        <h3>Consultations</h3>
        </div>
        <div className='content'>
        <p>We provide high-quality construction services to a wide variety of clients.</p>
        </div>
    </div>
      <div className='card'>
        <div className='icon'>
       <i class="fas fa-pencil-ruler"></i>
        <h3>Interior-design</h3>
        </div>
        <div className='content'>
        <p>We provide high-quality construction services to a wide variety of clients.</p>
        </div>
    </div>
    </section>
  <section className='projects'>
      <h1>Latest - Projects</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  </section>
    </>
  )
}

export default Content