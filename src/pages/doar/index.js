import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

    alert("Animal cadastrado!");
    navigate("/home");
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
                <option value='femino'>Femino</option>
                <option value='masculino'>Masculino</option>
                <option defaultValue value='nao-binario'>
                  Não-binário
                </option>
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
                <label className='checkbox-label' for='vehicle1'>
                  Com todas vacinas
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='castrado'
                />
                <label className='checkbox-label' for='vehicle1'>
                  Castrado
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='desmifurgado'
                />
                <label className='checkbox-label' for='vehicle1'>
                  Desmifurgado
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='negativo-fiv-felv'
                />
                <label className='checkbox-label' for='vehicle1'>
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
                <label className='checkbox-label' for='amigavelComCachorros'>
                  Amigável com cachorros
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='amigavelComGatos'
                />
                <label className='checkbox-label' for='amigavelComGatos'>
                  Amigável com gatos
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='amigavelComCriancas'
                />
                <label className='checkbox-label' for='amigavelComCriancas'>
                  Amigável com crianças
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='curioso'
                />
                <label className='checkbox-label' for='curioso'>
                  Curioso
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='sociavel'
                />
                <label className='checkbox-label' for='sociavel'>
                  Sociável
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='dominante'
                />
                <label className='checkbox-label' for='dominante'>
                  Dominante
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='submisso'
                />
                <label className='checkbox-label' for='submisso'>
                  Submisso
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='brincalhao'
                />
                <label className='checkbox-label' for='brincalhao'>
                  Brincalhão
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='extrovertido'
                />
                <label className='checkbox-label' for='extrovertido'>
                  Extrovertido
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='calmo'
                />
                <label className='checkbox-label' for='calmo'>
                  Calmo
                </label>
              </div>
              <div className='checkbox'>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  value='introspectivo'
                />
                <label className='checkbox-label' for='introspectivo'>
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

            <label class='custom-file-upload'>
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
