import { PrimaryButton, SecondaryButton } from "../../components/Button";
import {
  AppWrapper,
  AppHeader,
  AppLogo,
  AppTitle,
  AppSubtitle,
  LoginForm,
} from "./styles";

export const Login = () => (
  <AppWrapper>
    <AppHeader>
      <AppLogo src="/images/logo.svg" alt="logo Animal Rescue" />
      <AppTitle>Animal Rescue</AppTitle>
      <AppSubtitle>Aqui o amor é verdadeiro</AppSubtitle>
    </AppHeader>
    <LoginForm>
      <PrimaryButton>Login</PrimaryButton>
      <SecondaryButton>Cadastro</SecondaryButton>
    </LoginForm>
  </AppWrapper>
);
