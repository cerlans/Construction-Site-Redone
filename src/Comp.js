import React from 'react';

function Comp(props){
return (
<div className='gallery' style={{ backgroundImage: `url(${props.image})` }}>
   <div className='img-cont'>
      <div className='block'>
         <i className="fas fa-search-plus"></i>
         <h4>{props.address}</h4>
      </div>
   </div>
</div>
)
}

export default Comp;