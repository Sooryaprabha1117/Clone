// Cards.js
import React from "react";
import './Cards.css'; // Import the CSS file for styling
import photo1 from "./asset4/im1.svg";
import photo2 from "./asset4/im3.jpg";
import photo3 from "./asset4/im4.jpg";
import photo4 from "./asset4/im5.jpg";
import photo5 from "./asset4/im6.jpg";
import photo6 from "./asset4/im7.png";
import photo7 from "./asset4/im8.jpg";






function Cards() {
  return (
    <>
    <div className="card-container">
      <div className="card3">
        <img
          src={photo1}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 1: Sign Up</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
      <div className="card3">
        <img
          src={photo2}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 2: Email Verification</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
      <div className="card3">
        <img
          src={photo3}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 3: Payment and Access</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
      <div className="card3">
        <img
          src={photo4}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 4: Profile Setup</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
      <div className="card3">
        <img
          src={photo5}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 5: Customize Interests and Skills</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
      <div className="card3">
        <img
          src={photo6}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 6: Apply for Jobs/Internships</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
      <div className="card3">
        <img
          src={photo7}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 7: Interview Process</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
      <div className="card3">
        <img
          src={photo1}
          alt="Card Title"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">Step 8: Results</h3>
          <p className="card-text">
            This is the content of the card. You can put any text here to describe what this card is about. It can be a brief description, information, or anything you'd like to display inside the card.
          </p>
        </div>
      </div>
     
    </div>
     <div className="button-wrapper">
     <button className="enroll-button">Enroll</button>
   </div>
   <div className="contain">
    <div className="contentB">
    Start your Carrer Journey With Our Thozhil Internships & Jobs
   

    <button id="click">Enroll Now</button> 
    </div>
    
  </div>
   </>
  );
}

export default Cards;
