import React from 'react';
import './HoverCard.css';


const HoverCard = ({ imageSrc, step, heading, content }) => {
  return (
    <div className="card1">
      <img src={imageSrc} alt={heading} className="card1-image" />
      <div className="card1-heading">
        {step}
        <br />
        {heading}
      </div>
      <div className="card1-content-wrapper">
        <div className="card1-content">{content}</div>
      </div>
    </div>
  );
};



export default HoverCard;
