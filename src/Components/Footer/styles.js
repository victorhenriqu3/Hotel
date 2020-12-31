import styled from "styled-components";

export const FooterBase = styled.div`
  {
    background: var(--primary);
    sisplay: none;
    border-top: 5px solid var(--black);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    color: black;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;

    img {
      width: 3em;
      padding-right: 10px
    }

    strong {
      margin: 0 auto;
      
    }
    @media (max-width: 800px) {
      margin-bottom: 0%;
      padding: 1%;
      font-size: 0.8em;
    }
  }
`;
