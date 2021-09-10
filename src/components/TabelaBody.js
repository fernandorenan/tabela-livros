import React from "react";
import Delecao from "./Delecao";

const TabelaBody = props => (
  <tbody>
    {props.livros.map((livro, index) => (
      <tr key={livro.id}>
        <td>{livro.id}</td>
        <td>{livro.titulo}</td>
        <td>{livro.autor}</td>
        <td>
          <Delecao  delecao={props.removerLinha} livroid={livro.id}/>
        </td>
      </tr>
    ))}
  </tbody>
);
export default TabelaBody;
