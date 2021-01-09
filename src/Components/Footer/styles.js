import styled from "styled-components";

export const FooterBase = styled.div`
  {
    background: var(--primary);
    border-top: 5px solid var(--black);
    margin-bottom: 0%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: black;
    display: flex;
    position: fixed;
    justify-content: center;
    text-align: center;
    bottom: 0;
    font-size: 1.5em;
    width: 100%;

    a{
     text-decoration:none; 
    }
    strong {
      margin: 0 auto;
      
    }
    @media (max-width: 800px) {
      margin-bottom: 0%;
      padding: 1%;
      height: 6%;
      font-size: 0.8em;
    }
  }
`;
