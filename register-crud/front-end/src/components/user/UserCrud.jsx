import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "user",
  title: "Usuário",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar, e Excluir",
};

const baseUrl = "http://localhost:3001/users";

export default class UserCrud extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Main {...headerProps}>
        <p>Cadastro de usuário</p>
      </Main>
    );
  }
}
