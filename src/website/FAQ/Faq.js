import React from 'react';
import "./Faq.css";
import Faq1 from "./asset2/faq.jpg";
import FaqData from './FaqData';

function Faq ()  {
  return (
    <>
    <div className='container-1'>
        <div className='text-container-1'>
            <p className='para'>The Page Where All</p><p className='para'>
            Your Queries Made!</p>
            <span id='sp'>Never Assume You understand.Ask The Questions....
            </span>
            <div>
            <button>Enroll Now</button></div>

           
        </div>
        <div className='image-container-1'>
            <img src={Faq1} alt="Descriptive alt text"/>
        </div>
        
    </div>
    <FaqData/>
    </>
  );
}

export default Faq;
