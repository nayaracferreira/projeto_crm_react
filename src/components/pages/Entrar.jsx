import React from "react";

import { AppFooter, AppHeader } from "../organisms";

export default function Entrar() {
  return (
    <div className="body">
      <AppHeader />
      Link
      <main>
        <div id="mainEntrar" className="size-margin-90-5">
          <h2 className="textShadowTitles">Acesse a Tera Agenda</h2>

          <form action="/calendario" id="formEntrar">
            <div>
              <label htmlFor="login">Login</label>
              <input
                name="login"
                type="email"
                id="login"
                placeholder="Digite seu e-mail de cadastro"
                required
              />
            </div>

            <div>
              <label htmlFor="senha">Senha</label>
              <input
                name="senha"
                type="password"
                id="senha"
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
