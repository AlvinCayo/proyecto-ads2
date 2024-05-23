import React from "react";
import "./login.css";
import { Options } from "../../components/componentes-login/options/options";

export const Login = () => {
  return (
    <div className="container">
      <div className="rectangle">
        <div className="LogoIcono2">
          <img src="./public/img-view1/emi_logo.png" alt="emi_logo" />
        </div>
      </div>
      <h2 className="tittle">SELECCIONE UN TIPO DE USUARIO</h2>
      <div className="Opciones">
        <Options name="ADMINISTRADOR" />
        <Options name="USUARIO" />
        <Options name="SEGURIDAD" />
        <Options name="INVITADO" />
      </div>
    </div>
  );
};
