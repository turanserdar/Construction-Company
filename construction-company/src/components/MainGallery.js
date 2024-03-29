import React from "react";
import './MainGallery.css'

export const MainGallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-with-caption mt-8 mr-2 ml-8">
        <img src="../images/kitchen.jpg"></img>
        
          <p>Kitchen <br/> Kitchen Renovation Services</p>
          
        
      </div>

      <div className="image-with-caption mt-8 mr-2">
        <img src="../images/bathroom.jpg"/>
        <p>Bathroom <br/> Bathroom Renovation Services</p>
      </div>

      <div className="image-with-caption mt-8 mr-8">
        <img src="../images/whole_house.jpeg"></img>
        <p> Whole House <br/> Complete Home Renovations</p>
      </div>
    </div>
  );
};
