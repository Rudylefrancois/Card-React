import React from "react";
import "./style.scss";
import dataCard from "../Data/dataCard.js";

function Card() {

  return (
    <div className="card">
        {dataCard.map((card, index) => {
            return (
            <div className="card-content">
                <img className="card-img" src={card.src} alt={card.title} />
                <h1 className="card-title">{card.title}</h1>
                <h2 className="card-subtitle">{card.subtitle}</h2>
                <p className="card-text">{card.text}</p>    
                <button className="card-btn">En savoir plus</button> 
            </div>
            )
        })}
    </div>
  );
}

export default Card;
