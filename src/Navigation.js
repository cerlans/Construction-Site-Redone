import React, { useState } from 'react';

function Navigation (){
    const [count, setCount] = useState(0);
  return (
    <>
    <nav className='navigation'>
     
     <i class="fas fa-bars"></i>
    </nav>
    <section className='Hero'>
    <div className ='Hero-content'>
    <h1 className='animate__animated animate__fadeInLeft'>STAINLESS REPUTATION</h1>
    <p className='animate__animated  animate__fadeInRight'>We've earned an outstand reputation for our quality work and our integrity in dealing with clients,architects,suppliers,and sub-contractors.</p>
    <button className='hvr-fade'>Learn more</button>
    <div className='slides-btn'>
    <i class="fas fa-circle" onClick={()=>{
      setCount(2)
    }}></i>
    <i class="fas fa-circle" onClick={()=>{
      console.log(count)
    }}></i>
    <i class="fas fa-circle"></i>
    </div>
    </div>
    </section>
    </>
  )
}

export default Navigation