import React, { useEffect, useState } from "react";
import "./style.css";
import { animaisData } from "./animais.mock";
import axios from "axios";

export function MeusAnimais() {
  const [allAnimals, setStateAllAnimals] = useState([]);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [oldName, setOldName] = useState("");
  const [oldPic, setOldPic] = useState("");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const getAnimals = async () => {
    const email = localStorage.getItem("user_email");

    const animals = await axios.post(
      "https://animal-rescue-project.herokuapp.com/pet_adoption/retrieve-user-pets/",
      {
        user_email: email,
      }
    );

    animals.data.forEach((ani) => {
      let randPic = getRandomPic();

      let h = localStorage.getItem(ani.name);
      if (h === null) {
        ani.imgUrl = randPic;
        localStorage.setItem(ani.name, randPic);
      } else {
        ani.imgUrl = h;
      }
    });

    return animals.data;
  };

  const getAllMyAnimals = async () => {
    const animal_mock = animaisData;

    const animal_data = await getAnimals();

    const all = [...animal_data, ...animal_mock];

    console.log(all);

    setStateAllAnimals(all);
  };

  useEffect(() => {
    getAllMyAnimals();
  }, []);

  const handleDelete = (name) => {
    const email = localStorage.getItem("user_email");

    const newList = allAnimals.filter((item) => item.name !== name);

    setStateAllAnimals(newList);

    axios.post(
      "https://animal-rescue-project.herokuapp.com/pet_adoption/delete-pet/",
      {
        name: name,
        user_email: email,
      }
    );
  };

  const handleEdit = (data) => {
    setOldName(data.name);
    setNewAge(data.idade);
    setNewDescription(data.description);
    setNewName(data.name);

    const pic = localStorage.getItem(data.name);
    setOldPic(pic);

    setIsReadOnly(false);
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

  const handleSaveEditions = async () => {
    const email = localStorage.getItem("user_email");

    const age_in_years = handleAge(newAge);

    const retorno = await axios.patch(
      "https://animal-rescue-project.herokuapp.com/pet_adoption/register_pet/",
      {
        user_email: email,
        name: oldName,
        new_name: newName,
        new_description: newDescription,
        new_idade: age_in_years,
      }
    );

    console.log(retorno);
  };

  const getRandomPic = () => {
    const urls = [
      "https://live-production.wcms.abc-cdn.net.au/ff1221fbfdb2fe163fdda15df5f77676?impolicy=wcms_crop_resize&cropH=394&cropW=700&xPos=0&yPos=37&width=862&height=485",
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
      "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3N8ZW58MHx8MHx8&w=1000&q=80",
      "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn",
    ];
    const randomPic = urls[Math.floor(Math.random() * urls.length)];

    return randomPic;
  };

  const showInfos = () => {
    return (
      <>
        <div className="title-pag">Para adoção</div>
        {allAnimals &&
          allAnimals.map((data, key) => (
            <div key={key} className="animal">
              <img src={data.imgUrl} alt={data.description} />
              <h3 className="title">{data.name}</h3>
              <div className="infos">
                <div className="info-esquerda">
                  <div className="info">Espécie: {data.especie}</div>
                  <div className="info">Descrição: {data.description}</div>
                </div>
                <div className="info-direita">
                  <div className="info">Sexo: {data.sexo}</div>
                  <div className="info">Idade: {data.idade}</div>
                </div>
                <div className="icons">
                  <button
                    className="icon-bnt"
                    onClick={() => handleDelete(data.name)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <button className="icon-bnt" onClick={() => handleEdit(data)}>
                    <span className="material-symbols-outlined">edit_note</span>
                  </button>
                </div>
              </div>
            </div>
          ))(
            !allAnimals && (
              <div className="adotados">
                Você ainda não tem nenhum animal para adoção.
              </div>
            )
          )}

        <div className="title-pag">Adotados por mim</div>
        <div className="adotados">
          Você ainda não adotou nenhum animal pelo nosso site.
        </div>
      </>
    );
  };

  const showEdit = () => {
    return (
      <>
        <div className="animal">
          <form>
            <div className="infos-edit">
              <img src={oldPic} alt="Foto antiga" />
              <label>Nome do animal</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />

              <label>Descrição</label>
              <textarea
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />

              <label>Data de nascimento aproximado</label>
              <input
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
                type="date"
                id="start"
                name="trip-start"
                min="2018-01-01"
                max="2022-12-31"
              />
            </div>
            <div className="div-salvar">
              <button
                type="submit"
                className="button-salvar"
                onClick={() => handleSaveEditions()}
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="meus-animais">
        {isReadOnly ? showInfos() : showEdit()}
      </div>
    </div>
  );
}
