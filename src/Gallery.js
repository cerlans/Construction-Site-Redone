import React, { useState,useEffect } from 'react';
import data from './GalleryData.js';
import Card from './Card.js'

function Gallery(){
  const [filter,setFilter] = useState('')
  const [myData,setData] = useState()
  const [currentClass,setClass] = useState('hidden-menu')

  useEffect(()=> {
    if(filter === ''){
     let allResults = data.map(function(value){
       return <Card tag = {value.tag} photo = {value.photo} address = {value.address} />
       })
      setData(allResults)
    }else {
      let filteredResult = data.filter(function (value) { 
        return value.tag === filter; 
    }).map(function (value) { 
        return <Card tag = {value.tag} photo = {value.photo} address = {value.address} />
    })
    setData(filteredResult) 
    }
  },[filter])
  return (
    <>
    <div className='filter-container'>
      <div className='filter-button' onClick={()=>{ currentClass ? setClass('filter-menu'): setClass('hidden-menu')} }>
       Filter
      <i class="fas fa-sort-down"></i>
        <div className={currentClass}>
          <button onClick = {function(){setFilter('')}}> See ALL photos</button>
          <button onClick={function(){setFilter('Nature')}}>nature photos</button>
          <button onClick={function(){setFilter('Commercial')}}>Commercial photos</button>
          <button onClick={function(){setFilter('Residential')}}>residential photos</button>
        </div>
      </div>
    </div>
    <div className='filter-desktop'>
    
    </div>
 <div className='gallery-parent'>
   {myData}
 </div>
    </>
  )
}

export default Gallery;

