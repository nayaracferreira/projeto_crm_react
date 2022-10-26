import React from "react";

import facebook from "../../assets/logo_facebook.png";
import instagram from "../..//assets/logo_instagram.png";
import youtube from "../../assets/logo_youtube.png";
import gmail from "../../assets/logo_gmail.png";
import { Link } from "react-router-dom";

export default function Agenda() {
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
        <div className="agendamento">
          <form className="formConsulta">
            <h2>Consulta</h2>
            <div id="consulta">
              <p id="cliente">Dave Grohl</p>
              <div className="agendeServico">
                <p id="hora">11:30</p>
                <p id="servico">
                  Afrouxamento das roldanas que gera perda contínua de afinação
                  da guitarra
                </p>
                <button>x</button>
              </div>
            </div>
            <div id="consulta">
              <p id="cliente">Flea</p>
              <div className="agendeServico">
                <p id="hora">12:00</p>
                <p id="servico">Perda de precisão na tarraxa do baixo</p>
                <button>x</button>
              </div>
            </div>
            <div id="consulta">
              <p id="cliente">Tré Cool</p>
              <div className="agendeServico">
                <p id="hora">14:00</p>
                <p id="servico">Troca de molas do pedal de Bumbo da bateria</p>
                <button>x</button>
              </div>
            </div>
            <div id="consulta">
              <p id="cliente">Chris Martin</p>
              <div className="agendeServico">
                <p id="hora">15:30</p>
                <p id="servico">Desgaste entre as teclas do piano</p>
                <button>x</button>
              </div>
            </div>
            <div id="consulta">
              <p id="cliente">Carlos Santana</p>
              <div className="agendeServico">
                <p id="hora">16:30</p>
                <p id="servico">Problemas no captador da guitarra</p>
                <button>x</button>
              </div>
            </div>
          </form>

          <form className="formAgenda">
            <h2>Agende os clientes</h2>
            <div>
              <label htmlFor="cliente">Cliente</label>
              <input
                className="cliente"
                type="text"
                placeholder="Nome do cliente"
                required
              />
              <label htmlFor="serviço">Serviço</label>
              <div className="agendeServico">
                <input className="hora" type="time" required />
                <input
                  className="servico"
                  type="text"
                  placeholder="Informe o serviço"
                  required
                />
              </div>
            </div>
            <div className="btnPlus">
              <button type="onClick">+</button>
            </div>

            <div className="btnFechar">
              <button type="onSubmit">Encerrar Agenda</button>
            </div>
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
