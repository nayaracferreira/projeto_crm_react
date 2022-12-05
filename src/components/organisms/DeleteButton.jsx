import React from "react";

export default function DeleteButton({
  dia,
  email,
  notaDia,
  funcaoAtulizarValores,
}) {
  let emailEmpressa = email;
  let diamesano = dia;
  let nota = notaDia;

  let corpoRequisicao = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dia_aser_adicionado: diamesano,
      email_da_empresa: emailEmpressa,
      anotacao: nota,
    }),
  };

  async function eventDeletarRota() {
    await fetch("http://127.0.0.1:5000/deletadia", corpoRequisicao)
      .then((response) => response.json())
      .then((data) => console.log(data));
    // .finally(console.log("Função Realizada"));

    funcaoAtulizarValores();
  }

  return (
    <div className="formAgendaOculta">
      <li>
        {/* <p>{emailEmpressa}</p> */}
        <ul>
          <b>Dia:</b> {diamesano}
        </ul>
        <ul>
          <b>Anotação:</b> {nota}
        </ul>
      </li>
      <button onClick={eventDeletarRota}>Deletar</button>
    </div>
  );
}
