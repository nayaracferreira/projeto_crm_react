import React from "react";

import facebook from "../../assets/logo_facebook.png";
import instagram from "../..//assets/logo_instagram.png";
import youtube from "../../assets/logo_youtube.png";
import gmail from "../../assets/logo_gmail.png";
import { Link } from "react-router-dom";

export default function Entrar() {
  return (
    <div className="body">
      <header>
        <nav>
          <h1>
            <a
              href="/"
              aria-label="Tera Agenda: Encaminha para a página inicial"
            >
              Tera Agenda
            </a>
          </h1>
        </nav>
      </header>
      Link
      <main>
        <div id="mainEntrar" className="size-margin-90-5">
          <h2 className="textShadowTitles">Acesse a Tera Agenda</h2>

          <form action="/login/company/:companyId" id="formEntrar">
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

            <Link
              to="/calendario/:calendarioId/:agendaId"
              aria-label="Entrar: Encaminha para a página de agendamento"
            ></Link>
            <button type="submit" className="btnAcesso">
              Entrar
            </button>
          </form>
        </div>
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
