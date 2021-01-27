import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';

export default function App(props) {
  return (
    <div id='app'>
      <h1>Fundamentos React</h1>
      <Primeiro />
      <ComParametro 
        titulo='Segundo Componente' 
        aluno='Rodolfo'
        nota={ 9.8 }
      />
    </div>
  )
}