import React from "react";
import { IMaskInput } from "react-imask";
import { useEffect, useState } from "react";

export default function ImaskPhone() {
  const [empresa, setEmpresa] = useState([]);
  const [telefone, setTelefone] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/empresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ telefone, setTelefone }),
    })
      .then((response) => response.json())
      .then((data) => setEmpresa(data));
  }, []);

  return (
    <div>
      <label htmlFor="fone">Telefone*</label>
      <IMaskInput
        mask="+{55}(00)00000-0000"
        ey={empresa.id}
        id={empresa.id}
        onBlur={telefone}
        name="telefone"
        type="tel"
        placeholder="(00) 00000-0000"
        required
      />
    </div>
  );
}
