import { useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { PasswordInput, TextInput } from "../../components/Input";
import { FormWrapper } from "./styles";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TelaCadastro = ({ irParaTela = () => {}, ...props }) => {
  const emailCadastro = useRef("");
  const nomeCadastro = useRef("");
  const senhaCadastro = useRef("");
  const confirmaSenhaCadastro = useRef("");

  const navigate = useNavigate();

  const handleSubmitCadastro = (e) => {
    e.preventDefault();
    axios.post(
      "https://animal-rescue-project.herokuapp.com/login_register/create-account/",
      {
        email: emailCadastro.current.value,
        name: nomeCadastro.current.value,
        password: senhaCadastro.current.value,
        date: "1996-03-29",
      }
    );
    window.localStorage.removeItem("user_email");

    window.localStorage.setItem("user_email", emailCadastro.current.value);

    navigate("/home");
  };

  return (
    <FormWrapper onSubmit={(e) => handleSubmitCadastro(e)}>
      <TextInput
        label='E-mail'
        name='email'
        ref={emailCadastro}
        value={emailCadastro.current.value}
      />
      <TextInput
        label='Nome'
        name='nome'
        ref={nomeCadastro}
        value={nomeCadastro.current.value}
      />
      <PasswordInput
        label='Senha'
        name='senha'
        ref={senhaCadastro}
        value={senhaCadastro.current.value}
      />
      <PasswordInput
        label='Confirme a senha'
        name='confirmaSenha'
        ref={confirmaSenhaCadastro}
        value={confirmaSenhaCadastro.current.value}
      />
      <PrimaryButton onClick={(e) => handleSubmitCadastro()}>
        Cadastrar
      </PrimaryButton>
      <SecondaryButton onClick={(e) => irParaTela("")}>Voltar</SecondaryButton>
    </FormWrapper>
  );
};
