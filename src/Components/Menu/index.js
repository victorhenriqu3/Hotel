import React from 'react';
import Logo from '../../Assets/Logo.png';
import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Hotel logo" />
      </Link>
      <Link className="ButtonReg" to="/register"  alt="Registro" >
        Registrar Quarto
      </Link>
    </nav>
  );
}
export default Menu;
