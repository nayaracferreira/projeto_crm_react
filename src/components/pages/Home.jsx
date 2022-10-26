import React from "react";

import entrar from "../../assets/avatar-verde.png";
import cadastro from "../../assets/cadastro.png";
import agenda from "../../assets/calendario.jpg";
import quemSomos from "../../assets/quem_somos.png.opdownload";
import facebook from "../../assets/logo_facebook.png";
import instagram from "../..//assets/logo_instagram.png";
import youtube from "../../assets/logo_youtube.png";
import gmail from "../../assets/logo_gmail.png";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body">
      <header>
        <nav>
          <h1 className="textShadowTitles">Tera Agenda</h1>
          <Link to="/entrar">
            <img
              src={entrar}
              alt="Logo em forma redonda com a silhueta de um busto no centro"
            />
            <p>Entrar</p>
          </Link>
          <Link to="/cadastro">
            <img
              src={cadastro}
              alt="Formato de um papel rabiscado com um lápis acima na posição de escrita"
            />
            <p>Cadastro</p>
          </Link>
        </nav>
      </header>

      <main>
        <h2>Agendar é o melhor compromisso para o seu negócio</h2>
        <div id="calendario" className="size-margin-90-5">
          <p>Facilita a consulta de horários e o histórico do cliente.</p>
          <img
            src={agenda}
            alt="Imagem de um calendário com pinos grudados nas datas"
          />
        </div>

        <h2 id="quemSomosTitulo" className="textShadowTitles size-margin-90-5">
          Quem Somos?
        </h2>
        <div id="quemSomos" className="size-margin-90-5">
          <img
            src={quemSomos}
            alt="Círculo com a silhueta de pessoas suaa forma e ao centro dele a frase Quem Somos?"
          />
          <p>
            Gestão de agendamento é o elo entre o planejamento de algo e sua
            execução. Seu software de gestão de agendamento deve fornecer uma
            visão geral do trabalho em andamento que permita o rastreamento
            desde a concepção até a conclusão. Bem-vindo ao Tera Agenda:
            junte-se a equipes em todo o mundo que usam nossos painéis estilo
            único para obter uma visão clara do progresso de agendamento. Vamos
            nos organizar juntos!
          </p>
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
