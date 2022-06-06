import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import {
  AppWrapper,
  AppHeader,
  AppLogo,
  AppTitle,
  AppSubtitle,
  LoginWrapper,
  FormWrapper,
} from "./styles";

export const Login = () => {
  const [tela, setTela] = useState("");

  const handleClick = (pagina = "") => {
    console.log({ pagina });
    setTela(pagina);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
  };

  const handleSubmitCadastro = (e) => {
    e.preventDefault();
  };

  const TelaInicial = (
    <LoginWrapper>
      <PrimaryButton onClick={(e) => handleClick("login")}>Login</PrimaryButton>
      <SecondaryButton onClick={(e) => handleClick("cadastro")}>
        Cadastro
      </SecondaryButton>
    </LoginWrapper>
  );

  /* TODO: adicionar form login */
  const TelaLogin = (
    <FormWrapper onSubmit={(e) => handleSubmitLogin(e)}>
      <PrimaryButton onClick={(e) => handleClick("login")}>Login</PrimaryButton>
      <SecondaryButton onClick={(e) => handleClick("cadastro")}>
        Cadastro
      </SecondaryButton>
    </FormWrapper>
  );

  /* TODO: adicionar form cadastro */
  const TelaCadastro = (
    <form onSubmit={(e) => handleSubmitCadastro(e)}>
      <PrimaryButton onClick={(e) => handleClick("login")}>Login</PrimaryButton>
      <SecondaryButton onClick={(e) => handleClick("cadastro")}>
        Cadastro
      </SecondaryButton>
    </form>
  );

  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src="/images/logo.svg" alt="logo Animal Rescue" />
        <AppTitle>Animal Rescue</AppTitle>
        <AppSubtitle>Aqui o amor é verdadeiro</AppSubtitle>
      </AppHeader>

      {tela === "" && TelaInicial}
      {tela === "login" && TelaLogin}
      {tela === "cadastro" && TelaCadastro}
    </AppWrapper>
  );
};
