import React from "react";
import { useState, useEffect } from "react";

import { AppFooter, AppHeader, Loading } from "../organisms";

export default function Entrar(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [empresa, setEmpresa] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/empresa/all")
      .then((response) => response.json())
      .then((data) => setEmpresa(data));
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="body">
      <AppHeader />
      Link
      <main>
        <div id="mainEntrar" className="size-margin-90-5">
          <h2 className="textShadowTitles">Acesse a Tera Agenda</h2>

          <form action="/agenda" id="formEntrar">
            {/* {props.empresa.map((empresa) => (<div>
              <label htmlFor="login">Login</label>
              <input
                key={empresa.id}
                name={empresa.email}
                type="email"
                id={empresa.id}
                placeholder="Digite seu e-mail de cadastro"
                required
              />
            </div>))} */}
            <div>
              <label htmlFor="login">Login</label>
              <input
                key={empresa.id}
                name={empresa.email}
                type="email"
                id={empresa.id}
                placeholder="Digite seu e-mail de cadastro"
                required
              />
            </div>

            <div>
              <label htmlFor="senha">Senha</label>
              <input
                key={empresa.id}
                name={empresa.senha}
                type="password"
                id={empresa.id}
                placeholder="Digite sua senha"
                minLength="8"
                maxLength="8"
                required
              />
            </div>

            <label>
              <input type="checkbox" defaultChecked="cheked" />
              Lembrar-me
            </label>

            <button
              type="submit"
              aria-label="Entrar: Encaminha para a página do calendário"
              className="btnAcesso"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
