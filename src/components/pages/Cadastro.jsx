import React from "react";

import facebook from "../../assets/logo_facebook.png";
import instagram from "../../assets/logo_instagram.png";
import youtube from "../../assets/logo_youtube.png";
import gmail from "../../assets/logo_gmail.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className="body">
      <header>
        <nav>
          <h1>
            <Link
              to="/"
              aria-label="Tera Agenda: Encaminha para a página inicial"
            >
              Tera Agenda
            </Link>
          </h1>
        </nav>
      </header>

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

      <footer>
        <h2 className="textShadowTitles" id="sigaNos">
          Sigam-nos nas Redes sociais
        </h2>
        <div className="redes">
          <Link to="https://pt-br.facebook.com/">
            <img src={facebook} alt="Logo Facebook: círculo com f no centro" />
          </Link>
          <Link to="https://www.instagram.com/">
            <img
              src={instagram}
              alt="Logo do Instagram: círculo com uma câmera em perspectiva frontal no centro"
            />
          </Link>
          <Link to="https://www.youtube.com/">
            <img
              src={youtube}
              alt="Logo do Youtube: círculo onde no centro tem um retangulo com um triângulo rotacionado"
            />
          </Link>
        </div>

        <div className="cabecalho">
          <p id="faleConosco">
            <b>Fale conosco</b>
          </p>
          <div>
            <img
              src={gmail}
              alt="Logo Gmail: a representação de um envelope fechado"
            />
          </div>
          <div>
            <Link to="http://gmail.com">nayara.dcf@gmail.com</Link>
          </div>
          <div>
            <Link to="http://gmail.com">renatogamedesigner@gmail.com</Link>
          </div>

          <p id="cComercial">© 2022 Tera Agenda Serviços de Tecnologia Ltda.</p>
        </div>
      </footer>
    </div>
  );
}
