import React from 'react';
import "./Main.css";
import myImages from "./asset1/img1.jpg";

const Main = () => {
  return (
    <div className='container-1'>
        <div className='text-container-1'>
            <p className='para'>"Fueling Your Journey:</p>  
            <p className='para'>Internships Ignite, Jobs</p>   
            <p className='para'>Propel-Your Trailblazing</p>  
            <p className='para'>Odyssey Begins Here!"</p>  
        </div>
        <div className='image-container-1'>
            <img src={myImages} alt="Descriptive alt text"/>
        </div>
    </div>
  );
}

export default Main;