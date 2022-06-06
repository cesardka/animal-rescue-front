import { PrimaryButton, SecondaryButton } from "../../components/Button";
import {
  AppWrapper,
  AppHeader,
  AppLogo,
  AppTitle,
  AppSubtitle,
  LoginWrapper,
} from "./styles";

const handleLoginClik = () => {};

export const Login = () => (
  <AppWrapper>
    <AppHeader>
      <AppLogo src="/images/logo.svg" alt="logo Animal Rescue" />
      <AppTitle>Animal Rescue</AppTitle>
      <AppSubtitle>Aqui o amor é verdadeiro</AppSubtitle>
    </AppHeader>

    <LoginWrapper>
      <PrimaryButton onClick={handleLoginClik}>Login</PrimaryButton>
      <SecondaryButton>Cadastro</SecondaryButton>
    </LoginWrapper>
  </AppWrapper>
);
