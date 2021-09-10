import React from "react";


const Ordenacao = props => (
    <div className="container-setinhas" >
     <div onClick={() => props.ordCresc()}>&#129093;</div>
     <div onClick={() => props.ordDesc()}>&#129095;</div>     
    </div>
);
export default Ordenacao;
