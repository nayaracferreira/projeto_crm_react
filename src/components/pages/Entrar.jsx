import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AppFooter, AppHeader, Loading } from "../organisms";

export default function Entrar() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const navigate = useNavigate();

  const loginClick = () => {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ email: email, senha: senha }),
    })
      .then((response) => response.json())

      .then((data) => {
        if (data.Sucesso === true) {
          localStorage.setItem("emailLocalStorage", email);
          navigate("/agenda");
        } else {
          window.alert("Login ou senha inválidos!");
        }
      });

    setIsLoading(true);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="body">
      <AppHeader />
      Link
      <main>
        <div id="mainEntrar" className="size-margin-90-5">
          <h2 className="textShadowTitles">Acesse a Tera Agenda</h2>

          <form action="/entrar" id="formEntrar" onSubmit={loginClick}>
            <div>
              <label htmlFor="login">Login</label>
              <input
                onBlur={(event) => setEmail(event.target.value)}
                defaulvalue={email}
                tabIndex={4}
                name="email"
                type="email"
                placeholder="Digite seu e-mail de cadastro"
                required
              />
            </div>

            <div>
              <label htmlFor="senha">Senha</label>
              <input
                onBlur={(event) => setSenha(event.target.value)}
                defaulvalue={senha}
                tabIndex={12}
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
              onClick={loginClick}
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
