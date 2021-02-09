import React from "react";
import Main from "../Main";

function Home() {
  return (
    <Main
      icon="home"
      title="Início"
      subtitle="Segundo Projeto do capítulo de react"
    >
      <div className="display-4">Bem vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a contrução de um cadastro desenvolvido em
        React!
      </p>
    </Main>
  );
}

export default Home;
