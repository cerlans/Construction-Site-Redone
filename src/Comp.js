import React from 'react';

function Comp(props){
return (
<div className='project-photo' style={{ backgroundImage: `url(${props.image})` }}>
   <div className='outer-cont'>
      <div className='inner-cont'>
       <i class="fas fa-search"></i>
         <h4>{props.address}</h4>
      </div>
   </div>
</div>
)
}

export default Comp;