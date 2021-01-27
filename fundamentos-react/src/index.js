import './index.css'
import React from 'react';
import ReactDOM from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';


ReactDOM.render(
    <div id='app'>
      <Primeiro />
      <ComParametro 
        titulo='Segundo Componente' 
        aluno='Rodolfo'
        nota={ 9.8 }
      />
      <ComParametro 
        titulo='Segundo Componente' 
        aluno='Vinicius'
        nota={ 9.3 }
      />
    </div>,
    document.getElementById('root')
)
