import React, { useEffect, useState } from "react";
import "./style.css";
import { animaisData } from "./animais.mock";

import axios from "axios";

export function MeusAnimais() {
  const [allAnimals, setStateAllAnimals] = useState([]);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newIdade, setNewIdade] = useState("");

  const getAnimals = async () => {
    const email = localStorage.getItem("user_email");

    const animals = await axios.post(
      "https://animal-rescue-project.herokuapp.com/pet_adoption/retrieve-user-pets/",
      {
        user_email: email,
      }
    );

    return animals.data;
  };

  const getAllMyAnimals = async () => {
    const animal_mock = animaisData;
    const animal_data = await getAnimals();

    const all = [...animal_mock, ...animal_data];

    setStateAllAnimals(all);
  };

  useEffect(() => {
    getAllMyAnimals();
  }, []);

  const handleDelete = (name) => {
    const email = localStorage.getItem("user_email");
    console.log("usuario", email);

    axios.post(
      "https://animal-rescue-project.herokuapp.com/pet_adoption/delete-pet/",
      {
        name: name,
        user_email: email,
      }
    );

    console.log("nome para deletar", name);
  };

  const handleEdit = async (data) => {
    setOldName(data.name);

    setIsReadOnly(false);

    console.log(data);
  };

  const handleSaveEditions = async (data) => {
    const email = localStorage.getItem("user_email");

    await axios.patch(
      "https://animal-rescue-project.herokuapp.com/pet_adoption/register_pet/",
      {
        user_email: email,
        name: data.name,
        new_name: "Rex",
        new_description: data.description,
        new_idade: data.idade,
      }
    );
  };

  return (
    <div className='container'>
      <div className='meus-animais'>
        <div className='title-pag'>Para adoção</div>
        {allAnimals.map((data, key) => {
          return (
            <div key={key} className='animal'>
              <img
                src={
                  data.imgUrl ||
                  "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
                }
              />
              <h3 className='title'>{data.name}</h3>
              <div className='infos'>
                <div className='info-esquerda'>
                  <div className='info'>
                    <input
                      readOnly={isReadOnly}
                      value={isReadOnly ? data.name : newName}
                    />
                  </div>
                  <div className='info'>Espécie: {data.especie}</div>
                  <div className='info'>Descrição: {data.description}</div>
                </div>
                <div className='info-direita'>
                  <div className='info'>Sexo: {data.sexo}</div>
                  <div className='info'>Idade: {data.idade}</div>
                </div>
                <div className='icons'>
                  <button
                    className='icon-bnt'
                    onClick={() => handleDelete(data.name)}>
                    <span className='material-symbols-outlined'>delete</span>
                  </button>
                  <button className='icon-bnt' onClick={() => handleEdit(data)}>
                    <span className='material-symbols-outlined'>edit_note</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className='title-pag'>Adotados por mim</div>
        <div className='adotados'>
          Você ainda não adotou nenhum animal pelo nosso site.
        </div>
      </div>
    </div>
  );
}
