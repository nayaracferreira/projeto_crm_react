import React, { useState } from "react";
import { IMaskInput } from "react-imask";

import { AppFooter, AppHeader, DeleteButton } from "../organisms";

export default function Agenda() {
  // -------------------------------------------------------------------------------------------------------------------- //

  const emailTeste = "teste@com.br";

  let [listaTodosValores, setlistaTodosValores] = useState([
    { Dia: "Teste", Email: emailTeste, Nota: "Teste" },
  ]);

  let [primeiroAtiva, setprimeiroAtiva] = useState(true);

  let corpoRequisicaoPegarMes = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email_da_empresa: emailTeste }),
  };

  async function PegarTudoMesComEmail() {
    await fetch("http://127.0.0.1:5000/todomes", corpoRequisicaoPegarMes)
      .then((response) => response.json())
      .then((data) => setlistaTodosValores(data));

    // console.log(listaTodosValores)
  }

  if (primeiroAtiva === true) {
    PegarTudoMesComEmail();
    setprimeiroAtiva(false);
  }

  // -------------------------------------------------------------------------------------------------------------------- //

  const [valorDia, setValorDia] = useState("");
  const [valorNota, setValorNota] = useState("");

  let emailEmpresa = emailTeste;
  let diamesano = valorDia;
  let nota = valorNota;

  let corpoRequisicaoAdicionarDia = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dia_aser_adicionado: diamesano,
      email_da_empresa: emailEmpresa,
      anotacao: nota,
    }),
  };

  async function eventAdicionarDia() {
    await fetch(
      "http://127.0.0.1:5000/adicionardia",
      corpoRequisicaoAdicionarDia
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    // .finally(console.log("Valores adicionado na tabela"));

    PegarTudoMesComEmail();
  }

  const eventPuxarInputsDias = (Event) => {
    // console.log("Valores dias mudados")
    setValorDia(Event.target.value);

    // console.log(this.diaAdicionado.value)
  };

  const eventPuxarInputsNotas = (Event) => {
    // console.log("Valores de nota mudados")
    setValorNota(Event.target.value);

    // console.log(this.diaAdicionado.value)
  };

  return (
    <div className="body">
      <AppHeader />
      Link
      <main>
        <div>
          {/* <button onClick={PegarTudoMesComEmail}>Pegar todo Mes</button>  botaõa para teste*/}

          <div>
            <form>
              <label>
                DIA:
                <IMaskInput
                  mask="00/00/00"
                  type="text"
                  value={valorDia}
                  onChange={eventPuxarInputsDias}
                />
              </label>

              <label>
                NOTA:
                <input
                  type="text"
                  value={valorNota}
                  onChange={eventPuxarInputsNotas}
                />
              </label>
            </form>
            <button onClick={eventAdicionarDia}>
              Adicionar ao novo no Mes
            </button>
            <div>
              {listaTodosValores.map((notaDeleteComp) => (
                <DeleteButton
                  key={notaDeleteComp.Nota}
                  dia={notaDeleteComp.Dia}
                  email={notaDeleteComp.Email}
                  notaDia={notaDeleteComp.Nota}
                  funcaoAtulizarValores={PegarTudoMesComEmail}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
