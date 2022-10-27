import React from "react";
import { AppFooter, AppHeader } from "../organisms";

export default function Agenda() {
  return (
    <div className="body">
      <AppHeader />
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
      <AppFooter />
    </div>
  );
}
