import React from 'react';
import FamiliaMembro from './FamiliaMembro';



const Familia = (props) => {
  
  return ( 
    <div>
      <FamiliaMembro firstname='Rodolfo' lastname={props.lastname} />
      <FamiliaMembro firstname='Katia' lastname={props.lastname} />
      <FamiliaMembro firstname='Camilo' lastname='Albertoni' />
    </div>
   );
}
 
export default Familia;