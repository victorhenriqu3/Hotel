import React, { useEffect, useState } from "react";
import { FaBed, FaBath } from "react-icons/fa";
import axios from "axios";

import "./Card.css";

function Card() {
  const url = "https://5ff77176e7164b0017e1a959.mockapi.io/api/Hotel?sortBy=createdAt&order=asc";
  const [vacancies, setVacancies] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setVacancies(response.data);
    });
  }, [url]);

  if (vacancies) {
    content = vacancies.map((vanc, index) => {
      return (
          <div  key={index} className="card">
            <div
            id={index}
              className="Card-image"
              style={{
                background: `url(${vacancies[index].image}) center/cover`,
              }}></div>

            <div className="Card-text">
              <h2 className="type">{vacancies[index].title}</h2>
              <p className="secondText">{vacancies[index].description}</p>
            </div>

            <div className="card-stats">
              <div class="stat">
                <div className="bottomText">
                  <FaBath />{" "}
                  {vacancies[index].bathroom}
                </div>
              </div>
              <div class="stat border">
                <div className="bottomText">
                  <FaBed />{" "}
                  {vacancies[index].beds}
                </div>
              </div>
              <div class="stat">
                <a href="/" className="details">
                  R$ {vacancies[index].daily_value}
                </a>
              </div>
            </div>

          </div>
      );
    });
  }

  return <div className="GridsCard">{content}</div>;
}
export default Card;
