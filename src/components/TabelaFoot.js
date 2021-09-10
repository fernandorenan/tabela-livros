import React from "react";

const TabelaFoot = props => (
  <tfoot>
    <tr>
      <td colSpan="4">Quantidade de Livros na tabela: {props.livros.length}</td>
    </tr>
  </tfoot>
);
export default TabelaFoot;
