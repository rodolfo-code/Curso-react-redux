import React from 'react';

const Aleatorio = (props) => {
  const { min, max } = props
  const rand = Math.ceil(Math.random() * (max - min) + min)
  return ( 
    <>
      <h1>{ rand }</h1>
    </>
   );
}
 
export default Aleatorio;