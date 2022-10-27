import React from "react";

import { AppFooter, AppHeader } from "../organisms";

export default function Cadastro() {
  return (
    <div className="body">
      <AppHeader />

      <main>
        <form action="/entrar" className="formCadastre">
          {/* onSubmit={validaSenha} essa parte é dentro do form após o className*/}
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

          <div>
            <label htmlFor="cnpj">CNPJ*</label>
            <input
              className="cnpj"
              type="text"
              placeholder="00.000.000/000-00"
              required
            />
          </div>

          <div>
            <label htmlFor="fone">Telefone*</label>
            <input
              name="fone"
              type="tel"
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <div>
            <label htmlFor="email">E-mail*</label>
            <input
              name="email"
              type="email"
              placeholder="...@email.com"
              required
            />
          </div>

          <div className="local gapColuna">
            <div>
              <label htmlFor="cep">Cep*</label>
              <input
                name="cep"
                type="text"
                placeholder="Ex:012345-678"
                required
              />
            </div>

            <div>
              <label htmlFor="logradouro">Endereço*</label>
              <input
                name="logradouro"
                type="text"
                placeholder="Ex:Rua Vinte e Cindo de ..."
              />
            </div>

            <div>
              <label htmlFor="numero">Número*</label>
              <input name="numero" type="text" placeholder="Ex:123" required />
            </div>

            <div>
              <label htmlFor="blocoSala">Bloco/Sala</label>
              <input
                name="blocoSala"
                type="text"
                placeholder="Número do bloco ou sala"
              />
            </div>

            <div>
              <label htmlFor="bairro">Bairro*</label>
              <input name="bairro" type="text" placeholder="Informe o bairro" />
            </div>

            <div>
              <label htmlFor="localidade">Cidade*</label>
              <input
                name="localidade"
                type="text"
                placeholder="Informe a cidade"
              />
            </div>

            <div>
              <label htmlFor="uf">UF*</label>
              <input name="uf" type="text" placeholder="Informe a UF" />
            </div>
          </div>

          <div>
            <label htmlFor="cadastroSenha">Senha*</label>
            <input
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
