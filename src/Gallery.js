import React, { useState } from 'react';
import data from './GalleryData.js';
import Comp from './Comp.js'
function Gallery(){
  let photos = data.map(function(value){
    return <Comp image= {value.image} address = {value.address} />
  })
  return (
    <>
    {photos}
    </>
  )
}

export default Gallery;