import React from "react";
import { useEffect, useState } from "react";

import { AppFooter, AppHeader, Cep, ImaskCnpj, ImaskPhone } from "../organisms";

export default function Cadastro() {
  const [isLoading, setIsLoading] = useState(true);
  // const requestEmpresa = {
  //   method: "POST",
  //   body: JSON.stringify(),
  //   headers: new Headers({
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   }),
  // };
  useEffect(() => {
    fetch("http://127.0.0.1:5000/empresa", {
      method: "POST",
      body: JSON.stringify("empresa"),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setIsLoading(false);
  }, []);

  const [cadastroSenha, setCadastroSenha] = useState({});
  const [confSenha, setConfSenha] = useState({});

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
              name="cadastroSenha"
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
            <button type="onSubmit" value="Validar" className="btnEnviar">
              Enviar
            </button>
          </div>
        </form>
      </main>
      <AppFooter />
    </div>
  );
}
