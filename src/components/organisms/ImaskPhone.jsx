import React from "react";
import { IMaskInput } from "react-imask";

export default function ImaskPhone() {
  return (
    <div>
      <label htmlFor="fone">Telefone*</label>
      <IMaskInput
        mask="+{55}(00)00000-0000"
        name="fone"
        type="tel"
        placeholder="(00) 00000-0000"
        required
      />
    </div>
  );
}
