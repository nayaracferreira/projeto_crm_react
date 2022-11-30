import React from "react";
import { useState, useEffect } from "react";

import { AppFooter, AppHeader, Loading } from "../organisms";

export default function Entrar(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [empresa, setEmpresa] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(setEmpresa),
    })
      .then((response) => response.json())
      //.catch(e =>{console.log("e",e)})
      .then((data) => console.log(data));
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
            <div>
              <label htmlFor="login">Login</label>
              <input
                key={empresa.id}
                id={empresa.id}
                tabIndex={4}
                onBlur={empresa.email}
                name="email"
                type="email"
                placeholder="Digite seu e-mail de cadastro"
                required
              />
            </div>

            <div>
              <label htmlFor="senha">Senha</label>
              <input
                key={empresa.id}
                id={empresa.id}
                tabIndex={12}
                onBlur={empresa.senha}
                name="senha"
                type="password"
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
              type="onSubmit"
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
