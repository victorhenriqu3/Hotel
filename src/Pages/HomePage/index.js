import React from "react";
import styled from "styled-components";

import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import Card from "../../Components/Card";

const Signboard = styled.div`
  padding-top: 8vw;
  font-size: 3em;
  font-weight: bold;
  display: flex;
  z-index: 200;
  justify-content: center;

  @media (max-width: 600px){
    padding-top:25%;
    font-size:2em;
  }
`


function HomePage() {
  return (
    <div>
      <Menu />
      <Signboard>Lista de  Vagas</Signboard>
      <Card />
      <Footer />
    </div>
  );
}

export default HomePage;