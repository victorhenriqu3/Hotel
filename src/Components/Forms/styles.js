import styled from "styled-components";

export const FormBase = styled.div`{
    margin: 30% auto;
    width: 100%;
    border: 2px black;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    input{
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px 10px;

  button{
    background-color: var(--primary);
    color: var(--white);
    border: 10px none;
    border-radius: 4px;
    width:20%;
    height: 50%
  }
}`;

export default FormBase;
