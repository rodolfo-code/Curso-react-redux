import "./Main.css";
import React from "react";
import Header from "./Header";

function Main() {
  return (
    <React.Fragment>
      <Header />
      <main className="content">Conteudo</main>
    </React.Fragment>
  );
}

export default Main;
