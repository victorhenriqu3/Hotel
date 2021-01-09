import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./forms.css";

const initialValues = {
  title: "",
  description:"",
  image:"",
  beds:0,
  bathroom:0,
  daily_value:0.00,
  createdAt: 0,
}
const url = "https://5ff77176e7164b0017e1a959.mockapi.io/api/Hotel";
function Forms() {
  const [values,setValues] = useState(initialValues);
  const history = useHistory();
  console.log(values)

  function onChange(e) {
    const { name, value } = e.target;

    setValues({...values,[name]: value});
  }

  function onSubmit(ev){
    ev.preventDefault();

    axios.post(url,values)
    .then((response)=>{
      history.push("/");
    });
  }

  return (
    <div className="ContainerForm">
      <h1>Cadastro de Vaga</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="title">Título do Anúncio</label>
          <input required id="title" name="title" type="text" onChange={onChange}  />
        </div>
        <div className="formGroup">
          <label htmlFor="description"> Descrição do Anúncio </label>
          <textarea required id="description" name="description" rows="5" cols="33" onChange={onChange} />
        </div>
        <div className="formGroup">
          <label htmlFor="image">Imagem do Anúncio (url)</label>
          <input required id="image" name="image" type="text" onChange={onChange}/>
        </div>
        <div className="formGroup">
          <label htmlFor="beds">Camas</label>
          <input required id="beds" name="beds" type="number" onChange={onChange} />
        </div>
        <div className="formGroup">
          <label htmlFor="bathroom">Banheiros</label>
          <input required id="bathroom" name="bathroom" type="number" onChange={onChange}/>
        </div>
        <div className="formGroup">
          <label htmlFor="daily_value">Preço da Diária</label>
          <input required id="dailyValue" name="daily_value" type="number" step="0.01" onChange={onChange} />
        </div>
        <div className="formGroup">
          <button className="bt" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
