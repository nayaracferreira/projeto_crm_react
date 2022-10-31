import { useState } from "react";

export default function Cep() {
  const [endereco, setEndereco] = useState({
    logradouro: "",
    localidade: "",
    bairro: "",
    uf: "",
  });
  const getCep = (event) => {
    fetch(`https://viacep.com.br/ws/${event.target.value}/json/`, {
      method: "GET",
    }).then((response) => {
      response.json().then((dados) => {
        setEndereco(dados);
      });
    });
  };

  return (
    <div className="local gapColuna">
      <div>
        <label htmlFor="cep">Cep*</label>
        <input
          name="cep"
          type="text"
          onBlur={getCep}
          placeholder="Ex:012345-678"
          required
        />
      </div>

      <div>
        <label htmlFor="logradouro">Endereço*</label>
        <input
          defaultValue={endereco.logradouro}
          name="logradouro"
          type="text"
          placeholder="Ex:Rua Vinte e Cindo de ..."
        />
      </div>

      <div>
        <label htmlFor="numero">Número*</label>
        <input name="numero" type="text" placeholder="Ex:123" required />
      </div>

      <div>
        <label htmlFor="blocoSala">Bloco/Sala</label>
        <input
          name="blocoSala"
          type="text"
          placeholder="Número do bloco ou sala"
        />
      </div>

      <div>
        <label htmlFor="bairro">Bairro*</label>
        <input
          defaultValue={endereco.bairro}
          name="bairro"
          type="text"
          placeholder="Informe o bairro"
        />
      </div>

      <div>
        <label htmlFor="localidade">Cidade*</label>
        <input
          defaultValue={endereco.localidade}
          name="localidade"
          type="text"
          placeholder="Informe a cidade"
        />
      </div>

      <div>
        <label htmlFor="uf">UF*</label>
        <input
          defaultValue={endereco.uf}
          name="uf"
          type="text"
          placeholder="Informe a UF"
        />
      </div>
    </div>
  );
}
