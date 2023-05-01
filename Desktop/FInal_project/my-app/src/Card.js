import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Card.css";

function card ({number, title,}) {
  // mathi ko line haru destructor ho prps jastai pass garna pani sakinthyo but unecessary code lengthy hunxa
  return (<div className='card'>
    <div className="cardArea">
        <h2>{title}</h2>
        <hr/>
        <div className='no'>{number}</div>

    </div>
    
    
   


  </div>);
}

export default card;
