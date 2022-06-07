import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./style.css";

export function Doar() {
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [health, setHealth] = useState("");
  const [size, setSize] = useState("");
  const [chip, setChip] = useState("");
  const [personality, setPersonality] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      race,
      age,
      specie,
      gender,
      size,
      chip,
      personality,
      description,
    };

    console.log(data);

    const user_email = localStorage.getItem("user_email");

    const age_in_years = handleAge(age);

    const birthday = new Date(age);
    const age_formated = birthday.toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    });
    console.log(age_formated);

    axios.post(
      "https://animal-rescue-project.herokuapp.com/pet_adoption/register_pet/",
      {
        user_email: user_email || "gkdalcin@gmail.com",
        name: name,
        description: description,
        birthday: age_formated,
        especie: specie,
        sexo: gender,
      }
    );

    alert("Animal cadastrado!");
    navigate("/home");
  };

  const handleAge = (age) => {
    const today = new Date();
    const birth = new Date(age);

    return Math.floor(
      Math.ceil(
        Math.abs(birth.getTime() - today.getTime()) / (1000 * 3600 * 24)
      ) / 365.25
    );
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-questoes'>
          <div className='form-adotante'>
            <label>
              Nome do animal
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Raça
              <input
                type='text'
                value={race}
                onChange={(e) => setRace(e.target.value)}
              />
            </label>
            <label>
              Data de nascimento aproximado
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type='date'
                id='start'
                name='trip-start'
                min='2018-01-01'
                max='2022-12-31'
              />
            </label>
            <label>
              Espécie
              <select
                value={specie}
                onChange={(e) => setSpecie(e.target.value)}>
                <option value='cachorro'>Cachorro</option>
                <option value='gato'>Gato</option>
                <option defaultValue value='outro'>
                  Outro
                </option>
              </select>
            </label>
            <label>
              Sexo
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <option defaultValue value='femino'>
                  Femino
                </option>
                <option value='masculino'>Masculino</option>
                <option value='outro'>Outro</option>
              </select>
            </label>
            <label>
              Saúde
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='todas-vacinas'
                />
                <label className='checkbox-label' htmlFor='todas-vacinas'>
                  Com todas vacinas
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='castrado'
                />
                <label className='checkbox-label' htmlFor='castrado'>
                  Castrado
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='desmifurgado'
                />
                <label className='checkbox-label' htmlFor='vehicle1'>
                  Desmifurgado
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='negativo-fiv-felv'
                />
                <label className='checkbox-label' htmlFor='vehicle1'>
                  Negativo para FIV e FELV
                </label>
              </div>
            </label>
            <label>
              Porte
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value='pp'>PP</option>
                <option value='p'>P</option>
                <option defaultValue value='m'>
                  M
                </option>
                <option defaultValue value='g'>
                  G
                </option>
                <option defaultValue value='g'>
                  GG
                </option>
                <option defaultValue value='ns'>
                  É filhote e não sei estimar
                </option>
              </select>
            </label>
            <label>
              Chip
              <input
                type='text'
                value={chip}
                onChange={(e) => setChip(e.target.value)}
              />
            </label>
          </div>

          <div className='form-animal'>
            <label>
              Personalidade
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='amigavelComCachorros'
                />
                <label
                  className='checkbox-label'
                  htmlFor='amigavelComCachorros'>
                  Amigável com cachorros
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='amigavelComGatos'
                />
                <label className='checkbox-label' htmlFor='amigavelComGatos'>
                  Amigável com gatos
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='amigavelComCriancas'
                />
                <label className='checkbox-label' htmlFor='amigavelComCriancas'>
                  Amigável com crianças
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='curioso'
                />
                <label className='checkbox-label' htmlFor='curioso'>
                  Curioso
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='sociavel'
                />
                <label className='checkbox-label' htmlFor='sociavel'>
                  Sociável
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='dominante'
                />
                <label className='checkbox-label' htmlFor='dominante'>
                  Dominante
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='submisso'
                />
                <label className='checkbox-label' htmlFor='submisso'>
                  Submisso
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='brincalhao'
                />
                <label className='checkbox-label' htmlFor='brincalhao'>
                  Brincalhão
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='extrovertido'
                />
                <label className='checkbox-label' htmlFor='extrovertido'>
                  Extrovertido
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='calmo'
                />
                <label className='checkbox-label' htmlFor='calmo'>
                  Calmo
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='introspectivo'
                />
                <label className='checkbox-label' htmlFor='introspectivo'>
                  Introspectivo{" "}
                </label>
              </div>
            </label>
            <label>
              Breve descrição
              <textarea
                className='descricao'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>Fotos</label>

            <label className='custom-file-upload'>
              <input type='file' />
              <div className='input-file'>
                Carregue as imagens
                <i className='material-icons'>attachment</i>
              </div>
            </label>
          </div>
        </div>
        <button className='salvar' onClick={handleSubmit}>
          Cadastre
        </button>
      </form>
    </div>
  );
}
