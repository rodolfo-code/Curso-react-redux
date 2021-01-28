import React from 'react';
import './Card.css';

const Card = (props) => {
  const cardStyle = {
    backgroundColor: props.color || 'rgb(116, 115, 115)',
    borderColor: props.color || 'rgb(116, 115, 115)',
    color: '#000'
  }

  return ( 
    <div className='card' style={cardStyle}>
      <div className='title'>{props.titulo}</div>
      <div className='content'>{props.children}</div>
    </div>
   );
}
 
export default Card;