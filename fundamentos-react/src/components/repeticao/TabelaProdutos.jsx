import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export const TabelaProdutos = () => {
  const tabela = produtos.map((produto, i) => (
    <tr key={produto.id} className={i % 2 === 0 && "par"}>
      <td>{produto.id}</td>
      <td>{produto.name}</td>
      <td>R$ {produto.price.toFixed(2).replace(".", ",")}</td>
    </tr>
  ));

  return (
    <table className="tabelaProdutos">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{tabela}</tbody>
    </table>
  );
};
