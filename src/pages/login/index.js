import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { TelaLogin } from "./login";
import { TelaCadastro } from "./cadastro";
import {
  AppWrapper,
  AppHeader,
  AppLogo,
  AppTitle,
  AppSubtitle,
  LoginWrapper,
} from "./styles";

export const Login = () => {
  const [tela, setTela] = useState("");

  const irParaTela = (tela = "") => {
    console.log({ tela });
    setTela(tela);
  };

  const TelaInicial = (
    <LoginWrapper>
      <PrimaryButton onClick={(e) => irParaTela("login")}>Login</PrimaryButton>
      <SecondaryButton onClick={(e) => irParaTela("cadastro")}>
        Cadastro
      </SecondaryButton>
    </LoginWrapper>
  );

  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src="/images/logo.svg" alt="logo Animal Rescue" />
        <AppTitle>Animal Rescue</AppTitle>
        <AppSubtitle>Aqui o amor é verdadeiro</AppSubtitle>
      </AppHeader>
      {tela === "" && TelaInicial}
      {tela === "login" && <TelaLogin irParaTela={irParaTela} />}
      {tela === "cadastro" && <TelaCadastro irParaTela={irParaTela} />}
    </AppWrapper>
  );
};
