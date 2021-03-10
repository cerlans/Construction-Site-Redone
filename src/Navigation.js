import React, { useState } from 'react';

function Navigation (){
    const [count, setCount] = useState(0);
    let data = ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80','https://images.unsplash.com/photo-1454694220579-9d6672b1ec2a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60']
  return (
    <>
    <nav className='navigation'>
       <div>
        <h1><span className='logo'>Lex</span>Contracotrs</h1> 
       </div>
     <i class="fas fa-bars"></i>
        <ul className='desktop-nav'>
            <li class='hvr-underline-from-center'>Home</li>
            <li class='hvr-underline-from-center'>About Us</li>
            <li class='hvr-underline-from-center'>Gallery</li>
            <li class='hvr-underline-from-center'>Blog</li>
            <li class='hvr-underline-from-center'>Contact Us</li>
            <li class='hvr-underline-from-center'>Pages</li>
            <li><i class="fas fa-search"></i></li>
            <li><i class="fas fa-share-alt"></i></li>
        </ul>
    </nav>
    <section className='Hero' style={{ backgroundImage: `url(${data[count]})` }} >
    <div className ='Hero-content' >
    <h1 className='animate__animated animate__fadeInLeft'>STAINLESS REPUTATION</h1>
    <p className='animate__animated  animate__fadeInRight'>We've earned an outstand reputation for our quality work and our integrity in dealing with clients,architects,suppliers,and sub-contractors.</p>
    <button className='hvr-fade' className='animate__animated animate__fadeInUp'>Learn more</button>
    <div className='slides-btn'>
    <i class="fas fa-circle" onClick={()=>{setCount(0)}}></i>
    <i class="fas fa-circle" onClick={()=>{setCount(1)}}></i>
    <i class="fas fa-circle" onClick={()=>{setCount(2)}}></i>
    </div>
    </div>
    </section>
    </>
  )
}

export default Navigation