import React from "react";

import entrar from "../../assets/avatar-verde.png";
import cadastro from "../../assets/cadastro.png";

import { Link } from "react-router-dom";

export default function AppHeaderHome() {
  return (
    <header>
      <nav>
        <h1 className="textShadowTitles">Tera Agenda</h1>
        <Link to="/entrar">
          <img
            src={entrar}
            alt="Logo em forma redonda com a silhueta de um busto no centro"
          />
          <p>Entrar</p>
        </Link>
        <Link to="/cadastro">
          <img
            src={cadastro}
            alt="Formato de um papel rabiscado com um lápis acima na posição de escrita"
          />
          <p>Cadastro</p>
        </Link>
      </nav>
    </header>
  );
}
