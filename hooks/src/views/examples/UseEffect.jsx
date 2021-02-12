import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
	const n = parseInt(num)
	if(n < 0) return -1;
	if(n === 0) return 1;
	return calcFatorial(n -1) * n;
}

function parOuImpar(num) {
	const n = parseInt(num)
	if(n === 0) return 'Zero';
	if(n % 2 === 0) return 'Par'
	return 'Ímpar';
}

const UseEffect = (props) => {
	// Exercício #01
  const [number, setNumber] = useState(1);
	const [fatorial, setFatorial] = useState(1)

	
	useEffect(() => {
		setFatorial(calcFatorial(number))
	}, [number])

	useEffect(() => {
		if(fatorial > 1000000)
			return document.title = "Eita"
	}, [fatorial])
	

	// Exercício #02

	const [num, setNum] = useState(0)
	const [parImpar, setParImpar] = useState('Zero')
	
	useEffect(() => {
		setParImpar(parOuImpar(num))
	}, [num])
	
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
			<SectionTitle title='Exercício #01 ' />
      <div className="center">
				<div>
					<span className='text'>Fatorial: </span>
					<span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
				</div>
        <input
          className="input"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
			<SectionTitle title='Exercício #02 ' />
			<div className="center">
				<div>
					<span className="text">Par ou Ímpar: </span>
					<span className="text red">{parImpar}</span>
				</div>
				<input 
					type="number" 
					className="input"
					value={num}
					onChange={(e) => setNum(e.target.value)}
				/>
			</div>
    </div>
  );
};

export default UseEffect;
