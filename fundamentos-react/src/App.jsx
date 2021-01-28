import './App.css'
import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Fragmento from './components/basicos/Fragmento';

export default function App(props) {
  return (
    <div className='app'>
      <h1 className='title-header'>Fundamentos React</h1>
      <div className='cards'>
        <Card titulo='Desafio Aleatório'>
          <Aleatorio 
            min={ 2 }
            max={ 60 }
          />
        </Card>
        <Card className='primeiro' titulo='Primeiro Componente'>
          <Primeiro />        
        </Card>
        <Card className='fragmento' titulo='Fragmento'>
          <Fragmento />
        </Card>
        <Card titulo='Situação do Aluno'>
          <ComParametro 
            titulo='Segundo Componente' 
            aluno='Rodolfo'
            nota={ 9.8 }
          />      
        </Card>
      </div>

    </div>
  )
}