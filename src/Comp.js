import React from 'react';

function Comp(props){
return (
<div className='project-photo' style={{ backgroundImage: `url(${props.image})` }}>
   <div className='outer-cont'>
      <div className='inner-cont'>
         <i className="fas fa-search-plus"></i>
         <h4>{props.address}</h4>
      </div>
   </div>
</div>
)
}

export default Comp;