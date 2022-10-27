import React from "react";

import { AppHeaderHome, AppFooter } from "../organisms";

import agenda from "../../assets/calendario.jpg";
import quemSomos from "../../assets/quem_somos.png.opdownload";

export default function Home() {
  return (
    <div className="body">
      <AppHeaderHome />
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
      <AppFooter />
    </div>
  );
}
