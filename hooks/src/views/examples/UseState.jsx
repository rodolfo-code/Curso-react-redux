import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = useState(0);

  const random = () => {
    const rand = Math.floor(Math.random() * 100)
    return rand;
  }

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button 
            className="btn" 
            onClick={() => setCount(count + 1)}>
            + 1
          </button>
          <button 
            className="btn" 
            onClick={() => setCount(count - 1)}>
            - 1
          </button>
          <button 
            className="btn"
            onClick={() => setCount(xablinsk => count > 0 ? xablinsk * 2: random())}>
              1000
            </button>
            <button 
              className="btn"
              onClick={() => setCount(count - count)}>
              Reset
            </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
    </div>
  );
};

export default UseState;
