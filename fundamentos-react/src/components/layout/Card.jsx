import React from 'react';
import './Card.css';

const Card = (props) => {
  return ( 
    <div className='card'>
      <div className='title'>{props.titulo}</div>
      <div className='content'>{props.children}</div>
    </div>
   );
}
 
export default Card;