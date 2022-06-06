import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

export function Contrato() {
  const [name, setName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [profession, setProfession] = useState("");
  const [matrimonialState, setMatrimonialState] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [nameAnimal, setNameAnimal] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [specie, setSpecie] = useState("");
  const [gender, setGender] = useState("");
  const [isVaccinated, setIsVaccinated] = useState("");
  const [size, setSize] = useState("");
  const [chip, setChip] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

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
      nameAnimal,
      race,
      age,
      specie,
      gender,
      isVaccinated,
      size,
      chip,
    };

    console.log(data);
    navigate("/home");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} ref={ref}>
        <div className="form-questoes">
          <div className="form-adotante">
            <label>
              Nome do adotante
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
          </div>

          <div className="form-animal">
            <label>
              Nome do animal
              <input
                type="text"
                value={nameAnimal}
                onChange={(e) => setNameAnimal(e.target.value)}
              />
            </label>
            <label>
              Raça
              <input
                type="text"
                value={race}
                onChange={(e) => setRace(e.target.value)}
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
              Especie
              <select
                value={specie}
                onChange={(e) => setSpecie(e.target.value)}
              >
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
                <option defaultValue value="outro">
                  Outro
                </option>
              </select>
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
            <label>
              Vacinado
              <input
                type="text"
                value={isVaccinated}
                onChange={(e) => setIsVaccinated(e.target.value)}
              />
            </label>
            <label>
              Porte
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </label>
            <label>
              Chip
              <input
                type="text"
                value={chip}
                onChange={(e) => setChip(e.target.value)}
              />
            </label>
          </div>
        </div>
        <span>
          Ao adotar o animal acima descrito declaro-me apto para assumir a
          guarda e a responsabilidade sobre este animal, eximindo o doador de
          toda e qualquer responsabilidade por quaisquer atos praticados pelo
          animal a partir desta data. Declaro ainda estar ciente de todos os
          cuidados que este animal exige no que se refere à sua guarda e
          manutenção, além de conhecer todos os riscos inerentes à espécie no
          convívio com humanos, estando apto a guardá-lo e vigiá-lo,
          comprometendo-me a proporcionar boas condições de alojamento e
          alimentação, assim como, espaço físico que possibilite o animal se
          exercitar. Responsabilizo-me por preservar a saúde e integridade do
          animal e a submetê-lo aos cuidados médico veterinários sempre que
          necessário para este fim. Comprometo-me a não transmitir a posse deste
          animal a outrem sem o conhecimento do doador. Comprometo-me também, a
          permitir o acesso do doador ao local onde se encontra o animal para
          averiguação de suas condições. Tenho conhecimento de que caso seja
          constatado por parte do doador situação inadequada para o bem estar do
          animal, perderei a sua guarda, sem prejuízo das penalidades legais.
          Comprometo-me ainda em ESTERILIZAR (castrar) o animal adotado , se o
          doador já não o tiver feito, contribuindo assim para o controle da
          população de animais domésticos. Comprometo-me a cumprir toda a
          legislação vigente, municipal, estadual e federal, relativa à posse de
          animais. Declaro-me assim, ciente das normas acima, as quais aceito,
          assinando o presente Termo de Responsabilidade, assumindo plenamente
          os deveres que dele constam, bem como outros relacionados à posse
          responsável e que não estejam incluídos neste Termo.
          <strong>
            <br></br>
            Abandonar ou maltratar animais é crime.
            <br></br>
            Pena: 3 meses a 1 ano de detenção e multa (Lei Federal 9605/98)
          </strong>
        </span>
        <div className="contrato-termo">
          <div className="checkbox">
            <input
              type="checkbox"
              value={agree}
              onClick={() => setAgree(!agree)}
            />
            <label htmlFor={agree ? true : false}>
              Declaro que li e concordo com o termo.
            </label>
          </div>
        </div>
        <>
          {agree ? (
            <ReactToPdf
              targetRef={ref}
              filename="contrato.pdf"
              x={0.5}
              y={0.5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <div className="baixar-contrato">
                  <button
                    type="submit"
                    name="form-botao"
                    value="foo"
                    onClick={toPdf}
                  >
                    Baixar contrato
                  </button>
                </div>
              )}
            </ReactToPdf>
          ) : (
            <div className="title-aviso">Concorde para gerar o contrato</div>
          )}
        </>
      </form>
    </div>
  );
}
