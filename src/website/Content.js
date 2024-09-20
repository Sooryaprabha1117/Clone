import React from 'react';
import "./Content.css";
import myImage from "../asset/boy.jpg";

const Content = () => {
  return (
    <div className='container-1'>
        <div className='text-container-1'>
            <p className='para'>"Fueling Your Journey:</p>
            <p className='para'>Internships Ignite, Jobs</p>
            <p className='para'>Propel-Your Trailblazing</p>
            <p className='para'>Odyssey Begins Here!"</p>
        </div>
        <div className='image-container-1'>
            <img src={myImage} alt="Descriptive alt text"/>
        </div>
    </div>
  );
}

export default Content;
