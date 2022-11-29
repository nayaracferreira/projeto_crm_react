import React from "react";
import { useEffect, useState } from "react";

import { AppFooter, AppHeader, Cep, ImaskCnpj, ImaskPhone } from "../organisms";

export default function Cadastro() {
  const [isLoading, setIsLoading] = useState(true);
  const [empresa, setEmpresa] = useState([]);
  const [razao, setRazao, email, setEmail, senha, setSenha] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/empresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        razao: setRazao,
        email: setEmail,
        senha: setSenha,
      }),
    })
      .then((response) => response.json())
      .then((data) => setEmpresa(data));
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
              key={empresa.id}
              id={empresa.id}
              onBlur={razao}
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
              key={empresa.id}
              id={empresa.id}
              onBlur={email}
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
              key={empresa.id}
              id={empresa.id}
              name={senha}
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
