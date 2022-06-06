import { useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { PasswordInput, TextInput } from "../../components/Input";
import { FormWrapper } from "./styles";

import axios from "axios";

export const TelaLogin = ({ irParaTela = () => {}, ...props }) => {
  const emailLogin = useRef("");
  const passwordLogin = useRef("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/login_register/login/", {
      email: "gkdalcin@gmail.com",
      password: "sngahdr4g3",
    });

    //URL: https://animal-rescue-project.herokuapp.com/login_register/login/
  };

  return (
    <FormWrapper onSubmit={(e) => handleSubmitLogin(e)}>
      <TextInput
        label='E-mail'
        name='email'
        ref={emailLogin}
        value={emailLogin.current.value}
      />
      <PasswordInput
        label='Senha'
        name='senha'
        ref={passwordLogin}
        value={passwordLogin.current.value}
      />
      <PrimaryButton onClick={(e) => handleSubmitLogin()}>Entrar</PrimaryButton>
      <SecondaryButton onClick={(e) => irParaTela("")}>Voltar</SecondaryButton>
    </FormWrapper>
  );
};
