import React from 'react';
import "./Card.css";

function Card() {
  return(
    <div className="content" >
      <div className="card">
      <div className="topCard" >
        <h2 className="Title">Titulo do cartão</h2>
        <span className="secondText"> Exemplo de texto</span>
      </div>
      <div className="centerCard"></div>
      <div className="bottomCard">
        <p className="bottomText">Aqui um texto antigo do documento de teste</p>
        <button className="details">Mais detalhes</button>
      </div>
      </div>
    </div>
  );
}

export default Card;