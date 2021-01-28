import React from 'react';

const FamiliaMembro = (props) => {
  const { firstname, lastname } = props
  
  return ( 
    <div>{firstname} <strong>{lastname}</strong></div>
   );
}

export default FamiliaMembro;