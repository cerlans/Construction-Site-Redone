import React, { useState, useEffect } from "react";
import data from "./GalleryData.js";
import Card from "./Card.js";

function Gallery() {
  const [filter, setFilter] = useState("");
  const [photoData, setData] = useState();
  const [currentClass, setClass] = useState("hidden-menu");
  useEffect(() => {
    if (filter === "") {
      let allResults = data.map((value)=>{
        return (
          <Card tag={value.tag} photo={value.photo} address={value.address} />
        );
      });
      setData(allResults);
    } else {
      let filteredResult = data
        .filter((value) => {
          return value.tag === filter;
        })
        .map((value) => {
           return (
            <Card tag={value.tag} photo={value.photo} address={value.address} />
          );
        });
      setData(filteredResult);
    }
  }, [filter]);
function verify(){  
  if (currentClass === 'hidden-menu'){
    setClass('filter-menu')
  } else if (currentClass ==='filter-menu'){
    setClass('hidden-menu')
  }
}
  return (
    <>
      <div className="filter-container">
        <div
          className="filter-button"
          onClick={verify}
        >
          Filter
          <i class="fas fa-sort-down"></i>
          <div className={currentClass}>
            <button
              onClick={() => {
                setFilter("");
              }}
            >
              All photos
            </button>
            <button
              onClick={() => {
                setFilter("Nature");
              }}
            >
              nature photos
            </button>
            <button
              onClick={() => {
                setFilter("Commercial");
              }}
            >
              Commercial photos
            </button>
            <button
              onClick={() => {
                setFilter("Residential");
              }}
            >
              residential photos
            </button>
          </div>
        </div>
      </div>
      <div className="filter-desktop">
        <ul>
          <li
            onClick={() => {
              setFilter("");
            }}
          >
            All photos
          </li>
          <li
            onClick={() => {
              setFilter("Nature");
            }}
          >
            Nature photos
          </li>
          <li
            onClick={() => {
              setFilter("Commercial");
            }}
          >
            Commercial photos
          </li>
          <li
            onClick={() => {
              setFilter("Residential");
            }}
          >
            Residential photos
          </li>
        </ul>
      </div>
      <div className="gallery-parent">{photoData}</div>
    </>
  );
}

export default Gallery;
