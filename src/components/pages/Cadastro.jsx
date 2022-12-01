import React from "react";
import { useState } from "react";

import { AppFooter, AppHeader, ImaskCnpj, ImaskPhone, Cep } from "../organisms";

export default function Cadastro() {
  const [isLoading, setIsLoading] = useState(false);
  const [razao, setRazao] = useState([]);
  const [email, setEmail] = useState([]);
  const [cadastroSenha, setCadastroSenha] = useState({});
  const [confSenha, setConfSenha] = useState({});

  const enviarClick = () => {
    fetch("http://127.0.0.1:5000/empresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        razao: razao,
        email: email,
        senha: cadastroSenha,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setIsLoading(true);
  };

  const validaSenha = (event) => {
    if (cadastroSenha === confSenha) {
      window.alert("Seu cadastro foi concluído com sucesso!");
    } else {
      window.alert("As senhas estão diferentes!");
      event.preventDefault();
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body">
      <AppHeader />

      <main>
        <form action="/entrar" className="formCadastre" onSubmit={validaSenha}>
          <h2 className="textShadowTitles">Cadastre suas informações</h2>
          <div>
            <label htmlFor="razaoSocial">Razão Social*</label>
            <input
              className="razaoSocial"
              onBlur={(event) => setRazao(event.target.value)}
              defaulvalue={razao}
              name="razao"
              type="text"
              placeholder="Informe a Razão Social"
              required
            />
          </div>

          <ImaskCnpj />
          <ImaskPhone />

          <div>
            <label htmlFor="email">E-mail*</label>
            <input
              onBlur={(event) => setEmail(event.target.value)}
              defaulvalue={email}
              name="email"
              type="email"
              placeholder="...@email.com"
              required
            />
          </div>

          <Cep />

          <div>
            <label htmlFor="cadastroSenha">Senha*</label>
            <input
              onBlur={(event) => setCadastroSenha(event.target.value)}
              defaulvalue={cadastroSenha}
              name="senha"
              type="password"
              placeholder="Informe a senha"
              minLength="8"
              maxLength="8"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmSenha">Confirme a senha*</label>
            <input
              onBlur={(event) => setConfSenha(event.target.value)}
              name="confirmSenha"
              type="password"
              placeholder="Confirme a senha"
              minLength="8"
              maxLength="8"
              required
            />
          </div>

          <div className="campo">
            <p>(*) Campo obrigatório</p>
          </div>

          <div className="divBtnEnviar">
            <button
              onClick={enviarClick}
              type="onSubmit"
              value="Validar"
              className="btnEnviar"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
      <AppFooter />
    </div>
  );
}
