import React from "react";
import { IMaskInput } from "react-imask";
import { useState } from "react";

export default function ImaskPhone() {
  const [telefone, setTelefone] = useState([]);

  fetch("http://127.0.0.1:5000/empresa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ telefone: telefone }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <label htmlFor="fone">Telefone*</label>
      <IMaskInput
        mask="+{55}(00)00000-0000"
        onBlur={(event) => setTelefone(event.target.value)}
        defaultvalue={telefone}
        name="telefone"
        type="tel"
        placeholder="(00) 00000-0000"
        required
      />
    </div>
  );
}
