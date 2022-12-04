import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";

import { AppFooter, AppHeader } from "../organisms";

export default function Cadastro() {
  const [isLoading, setIsLoading] = useState(false);
  const [razao, setRazao] = useState([]);
  const [cnpj, setCnpj] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [email, setEmail] = useState([]);
  const [cep, setCep] = useState([]);
  const [endereco, setEndereco] = useState([]);
  const [numero, setNumero] = useState([]);
  const [bloco, setBloco] = useState([]);
  const [bairro, setBairro] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [uf, setUf] = useState([]);
  const [cadastroSenha, setCadastroSenha] = useState({});
  const [confSenha, setConfSenha] = useState({});
  const navigate = useNavigate();

  const enviarClick = () => {
    fetch("http://127.0.0.1:5000/empresa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        razao: razao,
        cnpj: cnpj,
        telefone: telefone,
        email: email,
        cep: cep,
        endereco: endereco,
        numero: numero,
        bloco: bloco,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        senha: cadastroSenha,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          navigate("/entrar");
        } else {
          navigate("/cadastro");
        }
      });
    //.finally(navigate("/entrar"));
    setIsLoading(false);
  };

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

  const validaSenha = (event) => {
    if (cadastroSenha === confSenha) {
      window.alert("Seu cadastro foi concluído com sucesso!");
    } else {
      window.alert("As senhas estão diferentes!");
      event.preventDefault();
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body">
      <AppHeader />

      <main>
        <form action="/entrar" className="formCadastre" onSubmit={validaSenha}>
          <h2 className="textShadowTitles">Cadastre suas informações</h2>
          <div>
            <label htmlFor="razaoSocial">Razão Social*</label>
            <input
              className="razaoSocial"
              onBlur={(event) => setRazao(event.target.value)}
              defaulvalue={razao}
              name="razao"
              type="text"
              placeholder="Informe a Razão Social"
              required
            />
          </div>

          <div>
            <label htmlFor="cnpj">CNPJ*</label>
            <IMaskInput
              mask="00.000.000/0000-00"
              onBlur={(event) => setCnpj(event.target.value)}
              defaultValue={cnpj}
              name="cnpj"
              type="text"
              placeholder="00.000.000/000-00"
              required
            />
          </div>
          <div>
            <label htmlFor="fone">Telefone*</label>
            <IMaskInput
              mask="+{55}(00)00000-0000"
              onBlur={(event) => setTelefone(event.target.value)}
              defaultValue={telefone}
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <div>
            <label htmlFor="email">E-mail*</label>
            <input
              onBlur={(event) => setEmail(event.target.value)}
              defaulvalue={email}
              name="email"
              type="email"
              placeholder="...@email.com"
              required
            />
          </div>

          <div className="local gapColuna">
            <div>
              <label htmlFor="cep">Cep*</label>
              <input
                onFocus={(event) => setCep(event.target.value)}
                defaultValue={cep}
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
                defaultValue={numero}
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
                defaultValue={bloco}
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

          <div>
            <label htmlFor="cadastroSenha">Senha*</label>
            <input
              onBlur={(event) => setCadastroSenha(event.target.value)}
              defaulvalue={cadastroSenha}
              name="senha"
              type="password"
              placeholder="Informe a senha"
              minLength="8"
              maxLength="8"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmSenha">Confirme a senha*</label>
            <input
              onBlur={(event) => setConfSenha(event.target.value)}
              name="confirmSenha"
              type="password"
              placeholder="Confirme a senha"
              minLength="8"
              maxLength="8"
              required
            />
          </div>

          <div className="campo">
            <p>(*) Campo obrigatório</p>
          </div>

          <div className="divBtnEnviar">
            <button
              onClick={enviarClick}
              type="onSubmit"
              value="Validar"
              className="btnEnviar"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
      <AppFooter />
    </div>
  );
}
