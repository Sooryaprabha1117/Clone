import React from 'react';
import "./front.css";
import HOW from "./asset4/imags.jpeg";

const Front = () => {
  return (
    <div className='container-1'>
        <div className='text-container-1'>
            <p className='para'>"How it Works?</p>
            <span id='sp'>"Find the perfect job or internship easily.</span><br></br>
            <span id='sp'>Apply and track your progress effortlessly."</span>
<div>
            <button>Enroll Now</button></div>

           
        </div>
        <div className='image-container-1'>
            <img src={HOW} alt="Descriptive alt text"/>
        </div>
        
    </div>
  );
}

export default Front;
