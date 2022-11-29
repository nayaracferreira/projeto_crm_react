import React from "react";
import { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";

export default function ImaskCnpj() {
  const [empresa, setEmpresa] = useState([]);
  const [cnpj, setCnpj] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/empresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ cnpj: setCnpj }),
    })
      .then((response) => response.json())
      .then((data) => setEmpresa(data));
  }, []);

  return (
    <div>
      <label htmlFor="cnpj">CNPJ*</label>
      <IMaskInput
        mask="00.000.000/0000-00"
        key={empresa.id}
        id={empresa.id}
        onBlur={cnpj}
        name="cnpj"
        type="text"
        placeholder="00.000.000/000-00"
        required
      />
    </div>
  );
}
