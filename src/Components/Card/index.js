import React, { useEffect, useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import axios from "axios";

import "./Card.css";

function Card() {
  const url = "https://5ff77176e7164b0017e1a959.mockapi.io/api/Hotel";
  const [vacancies, setVacancies] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setVacancies(response.data);
    });
  }, [url]);

  if (vacancies) {
    content = 
    vacancies.map((vanc, index) => {
      return (
        <div key={index} className="content">
          <div className="card">
            <div className="topCard">
              <h1 className="Title">{vacancies[index].title}</h1>
            </div>
            <div
              className="centerCard"
              style={{ background: `url(${vacancies[index].image}) center/cover` }}
            ></div>
            <div className="bottomCard">
            <p className="secondText">{vacancies[index].description}</p>
              <p className="bottomText"><FaBath/> {vacancies[index].bathroom} 
               {" "}<FaBed/> {vacancies[index].beds}</p>
              <button className="details">R$ {vacancies[index].daily_value}</button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (<div className="GridsCard">{content}</div>);
}
export default Card;
