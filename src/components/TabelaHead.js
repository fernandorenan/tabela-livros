import React from "react";
import Ordenacao from "./Ordenacao";

const TabelaHead = (props) => (
  <thead>
     <tr>
      <th colSpan="4">Tabela de Livros</th>
    </tr>

    <tr>
      <th>ISBN <Ordenacao ordCresc= { props.ordenarCrescente} ordDesc= {props.ordenarDescrescente}  /></th>
      <th>Título <Ordenacao  ordCresc= { props.ordenarCrescente} ordDesc= {props.ordenarDescrescente} /></th>
      <th>Autor <Ordenacao ordCresc= { props.ordenarCrescente} ordDesc= {props.ordenarDescrescente} /></th>
      <th></th>
    </tr>
  </thead>
);
export default TabelaHead;
