import React from "react";
import { IMaskInput } from "react-imask";

export default function ImaskCnpj() {
  return (
    <div>
      <label htmlFor="cnpj">CNPJ*</label>
      <IMaskInput
        mask="00.000.000/0000-00"
        className="cnpj"
        type="text"
        placeholder="00.000.000/000-00"
        required
      />
    </div>
  );
}
