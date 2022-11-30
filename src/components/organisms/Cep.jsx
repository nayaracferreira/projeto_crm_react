import { useState } from "react";

export default function Cep() {
  const [cep, setCep] = useState({});
  const [endereco, setEndereco] = useState({});
  const [numero, setNumero] = useState({});
  const [bloco, setBloco] = useState({});
  const [bairro, setBairro] = useState({});
  const [cidade, setCidade] = useState({});
  const [uf, setUf] = useState({});

  fetch("http://127.0.0.1:5000/empresa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      cep: cep,
      endereco: endereco,
      numero: numero,
      bloco: bloco,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  const [address, setAddress] = useState({
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
        setAddress(dados);
      });
    });
  };

  return (
    <div className="local gapColuna">
      <div>
        <label htmlFor="cep">Cep*</label>
        <input
          onFocus={(event) => setCep(event.target.value)}
          defaultvalue={cep}
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
          defaultValue={address.logradouro}
          onBlur={(event) => setEndereco(event.target.value)}
          defaultvalue={endereco}
          name="endereco"
          type="text"
          placeholder="Ex:Rua Vinte e Cindo de ..."
        />
      </div>

      <div>
        <label htmlFor="numero">Número*</label>
        <input
          onBlur={(event) => setNumero(event.target.value)}
          defaultvalue={numero}
          name="numero"
          type="text"
          placeholder="Ex:123"
          required
        />
      </div>

      <div>
        <label htmlFor="blocoSala">Bloco/Sala</label>
        <input
          onBlur={(event) => setBloco(event.target.value)}
          defaultvalue={bloco}
          name="bloco"
          type="text"
          placeholder="Número do bloco ou sala"
        />
      </div>

      <div>
        <label htmlFor="bairro">Bairro*</label>
        <input
          defaultValue={address.bairro}
          onBlur={(event) => setBairro(event.target.value)}
          defaultvalue={bairro}
          name="bairro"
          type="text"
          placeholder="Informe o bairro"
        />
      </div>

      <div>
        <label htmlFor="localidade">Cidade*</label>
        <input
          defaultValue={address.localidade}
          onBlur={(event) => setCidade(event.target.value)}
          defaultvalue={cidade}
          name="cidade"
          type="text"
          placeholder="Informe a cidade"
        />
      </div>

      <div>
        <label htmlFor="uf">UF*</label>
        <input
          defaultValue={address.uf}
          onBlur={(event) => setUf(event.target.value)}
          defaultvalue={uf}
          name="uf"
          type="text"
          placeholder="Informe a UF"
        />
      </div>
    </div>
  );
}
