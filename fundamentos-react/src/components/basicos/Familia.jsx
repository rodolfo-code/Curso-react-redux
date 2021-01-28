import React, { cloneElement } from 'react';

const Familia = (props) => {
  console.log(props.children)
  return (
    <div>
      {props.children.map((child) => {
          return cloneElement(child, props)
        })}
      {/* {props.children} */}
    </div>
   );
}
 
export default Familia;