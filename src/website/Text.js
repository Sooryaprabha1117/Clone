import React from 'react';
import './Text.css'; 

const Text = ({title,text}) => {
  return (
    <div id='flexx'>
     
    <div className="Text">
      <div className="Text-body">
        <h5 className="Text-title">{title}</h5>
        <p className="Text-text">
       {text}
        </p>
      </div>
     
    </div>
   
    </div>
  );
};

export default Text;
