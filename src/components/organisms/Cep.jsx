import { useEffect, useState } from "react";

export default function Cep() {
  const [empresa, setEmpresa] = useState([]);
  const [
    cep,
    setCep,
    enderecoo,
    setEnderecoo,
    numero,
    setNumero,
    bloco,
    setBloco,
    bairro,
    setBairro,
    cidade,
    setCidade,
    uf,
    setUf,
  ] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/empresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        cep: setCep,
        endereco: setEnderecoo,
        numero: setNumero,
        bloco: setBloco,
        bairro: setBairro,
        cidade: setCidade,
        uf,
        setUf,
      }),
    })
      .then((response) => response.json())
      .then((data) => setEmpresa(data));
  }, []);

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
          key={empresa.id}
          id={empresa.id}
          name={cep}
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
          key={empresa.id}
          id={empresa.id}
          onBlur={enderecoo}
          name="endereco"
          type="text"
          placeholder="Ex:Rua Vinte e Cindo de ..."
        />
      </div>

      <div>
        <label htmlFor="numero">Número*</label>
        <input
          key={empresa.id}
          id={empresa.id}
          onBlur={numero}
          name="numero"
          type="text"
          placeholder="Ex:123"
          required
        />
      </div>

      <div>
        <label htmlFor="blocoSala">Bloco/Sala</label>
        <input
          key={empresa.id}
          id={empresa.id}
          onBlur={bloco}
          name="bloco"
          type="text"
          placeholder="Número do bloco ou sala"
        />
      </div>

      <div>
        <label htmlFor="bairro">Bairro*</label>
        <input
          defaultValue={endereco.bairro}
          key={empresa.id}
          id={empresa.id}
          onBlur={bairro}
          name="bairro"
          type="text"
          placeholder="Informe o bairro"
        />
      </div>

      <div>
        <label htmlFor="localidade">Cidade*</label>
        <input
          defaultValue={endereco.localidade}
          key={empresa.id}
          id={empresa.id}
          onBlur={cidade}
          name="cidade"
          type="text"
          placeholder="Informe a cidade"
        />
      </div>

      <div>
        <label htmlFor="uf">UF*</label>
        <input
          defaultValue={endereco.uf}
          key={empresa.id}
          id={empresa.id}
          onBlur={uf}
          name="uf"
          type="text"
          placeholder="Informe a UF"
        />
      </div>
    </div>
  );
}
