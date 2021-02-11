import React from 'react';

function Comp(props){
return (
<div className='gallery'>
   <div className='img-cont'>
      <img src={props.image} alt="text" />
      <div className='block'>
         <i className="fas fa-search-plus"></i>
         <h4>{props.address}</h4>
      </div>
   </div>
</div>
)
}

export default Comp;