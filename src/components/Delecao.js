import React from "react";


const Delecao = props => (
    
    <button className="botao remover" onClick={ () => props.delecao(props.livroid)} >Remover</button>
);

export default Delecao;