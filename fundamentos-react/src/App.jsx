import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Fragmento from "./components/basicos/Fragmento";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import { TabelaProdutos } from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImper";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default function App(props) {
  return (
    <div className="app">
      <h1 className="title-header">Fundamentos React</h1>
      <div className="cards">
        {/* <Card className="primeiro" titulo="Repetição" color="#FFC518">
          
        </Card> */}
        <Card className="primeiro" titulo="Repetição" color="#FFC518">
          <ParOuImpar numero={21} />
          <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        </Card>
        <Card className="primeiro" titulo="Repetição" color="#3784E8">
          <TabelaProdutos />
        </Card>
        <Card className="primeiro" titulo="Repetição" color="#F24405">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card
          className="primeiro"
          titulo="Componentes com Filhos"
          color="#8874a3"
        >
          <Familia lastname="Oberhauser">
            <FamiliaMembro firstname="Rodolfo" />
            <FamiliaMembro firstname="Katia" />
            <FamiliaMembro firstname="Camilo" />
          </Familia>
        </Card>
        <Card titulo="Desafio Aleatório" color="#96ceb4">
          <Aleatorio min={2} max={60} />
        </Card>
        <Card className="primeiro" titulo="Primeiro Componente" color="#ff6f69">
          <Primeiro />
        </Card>
        <Card className="fragmento" titulo="Fragmento" color="#ffcc5c">
          <Fragmento />
        </Card>
        <Card titulo="Situação do Aluno" color="#8b9dc3">
          <ComParametro
            titulo="Segundo Componente"
            aluno="Rodolfo"
            nota={9.8}
          />
        </Card>
      </div>
    </div>
  );
}
