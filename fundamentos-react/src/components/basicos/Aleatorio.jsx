import React from 'react';

const Aleatorio = (props) => {
  const { min, max } = props
  const rand = parseInt(Math.random() * (max - min) + min)
  return ( 
    <>
      <div>Valor aleatório</div>
      <h1>{ rand }</h1>
    </>
   );
}
 
export default Aleatorio;