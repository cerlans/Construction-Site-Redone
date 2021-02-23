import React, { useState,useEffect } from 'react';
import data from './GalleryData.js';
import Card from './Card.js'
function Gallery(){
  const [filter,setFilter] = useState('')
  const [myData,setData] = useState()
 
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
        return <Clipboard tag = {value.tag} photo = {value.photo} address = {value.address} />
    })
    setData(filteredResult) 
    }
  },[filter])
  return (
    <>
  <h1>Some More Stuff</h1>
 <button onClick = {function(){
   setFilter('')
 }}> See ALL photos</button>
 <button onClick={function(){
   setFilter('Nature')
 }}>All nature photos</button>
  <button onClick={function(){
   setFilter('Commercial')
 }}>All Commercial photos</button>
  <button onClick={function(){
   setFilter('Residential')
 }}>All residential photos</button>
  {myData}
    </>
  )
}

export default Gallery;