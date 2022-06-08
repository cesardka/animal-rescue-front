import axios from "axios";
import { API_ENDPOINT } from "../constants";

export const cadastrarUsuario = ({ email, nome, senha }) => {
  const timestampCadastro = new Date();

  const response = axios.post(
    `${API_ENDPOINT}/login_register/create-account/`,
    {
      email: email,
      name: nome,
      password: senha,
      date: timestampCadastro,
    }
  );

  return response?.data;
};

export const acessaUsuario = (email, password) => {
  const res = axios
    .post(`${API_ENDPOINT}/login_register/login/`, {
      email,
      password,
    })
    .then((response) => {
      return response;
    });

  return res;
};
