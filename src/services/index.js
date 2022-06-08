import axios from "axios";
import { API_ENDPOINT } from "../constants";

export const getMyAnimals = async () => {
  const email = localStorage.getItem("user_email");

  const response = await axios.post(
    `${API_ENDPOINT}/pet_adoption/retrieve-user-pets/`,
    {
      user_email: email,
    }
  );

  const animals = response?.data;

  return animals;
};

export const updatePet = ({ name, new_name = "Rex", description, idade }) => {
  const email = localStorage.getItem("user_email");

  const response = axios.patch(
    "https://animal-rescue-project.herokuapp.com/pet_adoption/register_pet/",
    {
      user_email: email,
      name,
      new_name,
      new_description: description,
      new_idade: idade,
    }
  );

  return response;
};

export const deletePet = (name) => {
  const email = localStorage.getItem("user_email");
  console.log("usuario", email);

  const response = axios.post(`${API_ENDPOINT}/pet_adoption/delete-pet/`, {
    name: name,
    user_email: email,
  });

  console.log("nome para deletar", name);
  console.log("retorno", response);

  return response;
};
