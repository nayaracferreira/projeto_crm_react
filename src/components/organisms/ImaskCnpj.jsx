import React from "react";
import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function ImaskCnpj() {
  const [cnpj, setCnpj] = useState([]);

  fetch("http://127.0.0.1:5000/empresa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({ cnpj: cnpj }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <label htmlFor="cnpj">CNPJ*</label>
      <IMaskInput
        mask="00.000.000/0000-00"
        onBlur={(event) => setCnpj(event.target.value)}
        defaultvalue={cnpj}
        name="cnpj"
        type="text"
        placeholder="00.000.000/000-00"
        required
      />
    </div>
  );
}
