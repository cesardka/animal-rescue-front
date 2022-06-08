import React, { useState, useEffect } from "react";
import "./style.css";

export function Perfil() {
  const [name, setName] = useState("Jonelon Silva");
  const [streetName, setStreetName] = useState("Rua da Dona Aranha");
  const [district, setDistrict] = useState("Alagados");
  const [city, setCity] = useState("Porto Triste");
  const [state, setState] = useState("RiSos");
  const [cep, setCep] = useState("2837127128");
  const [cpf, setCpf] = useState("005138126251");
  const [rg, setRg] = useState("2342331231");
  const [profession, setProfession] = useState("Passador de pano");
  const [matrimonialState, setMatrimonialState] = useState("Solteiro");
  const [telephone, setTelephone] = useState("5191231712");
  const [email, setEmail] = useState("jonelon.silva@gmail.com");
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("Masculino");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      streetName,
      district,
      city,
      state,
      cep,
      cpf,
      rg,
      profession,
      matrimonialState,
      telephone,
      email,
      age,
      gender,
    };

    console.log(data);

    alert("Perfil salvo!");
  };

  useEffect(() => {}, []);

  return (
    <div className="form container">
      <form onSubmit={handleSubmit}>
        <div className="form-questoes">
          <div className="form-adotante">
            <label>
              Nome
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Endereço residencial
              <input
                type="text"
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
              />
            </label>

            <label>
              Bairro
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </label>
            <label>
              Cidade
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label>
              Estado
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </label>
            <label>
              CEP
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </label>
            <label>
              RG
              <input
                type="text"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
            </label>
          </div>

          <div className="form-animal">
            <label>
              CPF
              <input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </label>
            <label>
              Profissão
              <input
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </label>
            <label>
              Estado civil
              <input
                type="text"
                value={matrimonialState}
                onChange={(e) => setMatrimonialState(e.target.value)}
              />
            </label>
            <label>
              Telefone
              <input
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </label>
            <label>
              E-mail
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Idade
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label>
              Sexo
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="femino">Femino</option>
                <option value="masculino">Masculino</option>
                <option defaultValue value="nao-binario">
                  Não-binário
                </option>
                <option value="outro">Outro</option>
              </select>
            </label>
          </div>
        </div>

        <button className="salvar" onClick={handleSubmit}>
          Salvar
        </button>
      </form>
    </div>
  );
}
