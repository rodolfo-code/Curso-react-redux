import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "user",
  title: "Usuário",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar, e Excluir",
};

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        <p>Cadastro de usuário</p>
      </Main>
    );
  }
}
